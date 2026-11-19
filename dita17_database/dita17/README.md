# Dita 17 — Databaza me React dhe Firebase Firestore

Ky mësim vazhdon `dita12_Add_Product/dita12`. Përdorim të njëjtat fusha,
formularë, props, `useState`, `useEffect`, `map` dhe `filter`.
Risia: produktet ruhen në databazë dhe mbeten pas rifreskimit të faqes.

## 1. Pse Firebase? (5 minuta)

Në dita12, produktet ishin objekte në një array brenda React-it. Pas refresh,
ndryshimet humbnin sepse state jeton vetëm gjatë hapjes së faqes.

`localStorage` është më i thjeshtë, por ruan vetëm në shfletuesin e atij përdoruesi.
JSON Server kërkon një proces lokal shtesë. Për këtë mësim zgjedhim Firebase
Firestore: databazë online që thirret nga React, pa shkruar server me Node/Express.
Firebase e ofron backend-in; nxënësit shkruajnë vetëm frontend-in.

Në fund nxënësi mund të lexojë, shtojë, editojë dhe fshijë produkte në databazë.
Nuk nevojiten Router, Context, Redux ose custom hooks.

## 2. Krijimi dhe nisja e projektit (10 minuta)

Projekti i gatshëm gjendet në këtë folder. Nga rrënja e repository-t:

```bash
cd dita17_database/dita17
npm install
npm run dev
```

Për ta ndërtuar nga një folder bosh gjatë orës:

```bash
npm create vite@latest dita17 -- --template react
cd dita17
npm install
npm install firebase
```

Merr `App.jsx`, `AddProduct.jsx` dhe CSS nga dita12 si pikënisje; përfundoji
sipas skedarëve të këtij mësimi. `EditProduct.jsx` përdor të njëjtat fusha si Add.
Fotografia ruhet si URL interneti; një adresë lokale `blob:` nuk mbetet e përdorshme
pas rifreskimit ose në pajisje tjetër. Nuk nevojitet Firebase Storage për URL-të.

## 3. Krijimi i Firebase (15 minuta)

1. Hape [Firebase Console](https://console.firebase.google.com/) me llogarinë Google.
2. Krijo projekt, p.sh. `dita17-products`. Analytics mund ta lësh të çaktivizuar.
3. Regjistro një Web app me ikonën `</>`, p.sh. `react-products`.
4. Nuk nevojitet aktivizimi i Hosting. Kopjo objektin `firebaseConfig`.
5. Te `Build > Firestore Database`, zgjidh `Create database`.
6. Zgjidh **Standard edition**, databazën `(default)` dhe një lokacion të përshtatshëm.
7. Për ushtrimin në klasë zgjidh **Start in test mode**.
8. Te `src/firebase.js`, zëvendëso të gjitha vlerat `VENDOS_...` me vlerat e
   `firebaseConfig` nga projekti yt. Mos kopjo `getAnalytics`; nuk përdoret këtu.

Përdor **Cloud Firestore**, jo produktin tjetër me emrin Realtime Database.
Çdo nxënës mund të përdorë projektin e vet që të mos i ndryshojë produktet e tjetrit.

**Test mode është për ushtrimin:** lejon qasje publike të përkohshme, zakonisht
30 ditë; kontrollo datën në `Rules`. Përdor vetëm produkte provë. Konfigurimi Web
nuk është fjalëkalim: qasjen e kontrollojnë Firestore Security Rules. Mos përdor
service-account/private key në React. Para publikimit nevojiten Authentication
dhe rregulla sipas përdoruesit. Në fund të ushtrimit mund ta mbyllësh qasjen duke
publikuar këtë rregull te Firestore > Rules (aplikacioni pastaj nuk lexon/shkruan):

```text
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
```

## 4. Collection dhe document (5 minuta)

- `products` është collection: grupi i produkteve.
- Çdo produkt është një document, me ID që e krijon Firestore.
- `name`, `price`, `description`, `category`, `image` janë fields të dokumentit.

Shembull i një dokumenti në `products`:

```js
{
  name: 'Laptop',
  price: 650,
  description: 'Laptop për mësim',
  category: 'Electronics',
  image: 'https://placehold.co/600x400/png'
}
```

Collection krijohet automatikisht kur shtojmë produktin e parë. Fillimisht lista
është bosh. Në state e shtojmë edhe `id` e dokumentit, për `key`, editim dhe fshirje.

## 5. Lidhja me databazën (5 minuta)

Lexojmë së bashku `src/firebase.js`:

```js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
```

`initializeApp(firebaseConfig)` lidh aplikacionin me projektin tënd;
`getFirestore(app)` na jep databazën, të cilën e eksportojmë si `db`.
Kontrolli `firebaseConfigured` shfaq udhëzim derisa nxënësi të vendosë konfigurimin.

## 6. Leximi i produkteve — Read (10 minuta)

Në `App.jsx` heqim `initialProducts` dhe fillojmë me:

```js
const [products, setProducts] = useState([]);
```

Brenda `useEffect`, funksioni `loadProducts` merr dokumentet:

```js
const snapshot = await getDocs(collection(db, 'products'));
const databaseProducts = snapshot.docs.map((document) => ({
  ...document.data(),
  id: document.id,
}));
setProducts(databaseProducts);
```

`getDocs` lexon collection; `data()` jep fushat e produktit. `map` i kthen në
array-n që React e shfaq si në dita12. Leximi bëhet në hapjen e faqes; për
ndryshimet nga një pajisje tjetër bëj refresh. Nuk kemi shtuar listener në kohë reale.

`async` tregon funksion asinkron; `await` pret përgjigjen e databazës.
`try` përmban veprimin, `catch` shfaq gabimin, `finally` ndal gjendjen e pritjes.
Kontrolli `active` në effect shmang përditësimin e state pas largimit të komponentit.

## 7. Shtimi — Create (10 minuta)

`AddProduct.jsx` vazhdon të krijojë objektin nga formulari. Heqim `Date.now()`
sepse ID-në e jep Firestore. Çmimin e kthejmë në numër me `Number(...)`.

Te funksioni `addProduct` në `App.jsx`:

```js
const document = await addDoc(collection(db, 'products'), newProduct);
setProducts((prevProducts) => [
  ...prevProducts,
  { ...newProduct, id: document.id },
]);
```

Së pari ruajmë në databazë, pastaj në state. Formulari përdor
`await addProduct(newProduct)` dhe pastrohet vetëm kur rezultati është `true`.
Nëse databaza e refuzon kërkesën, vlerat mbeten në formular për një provë tjetër.

**Provoje tani:** shto Laptop-in e shembullit, kontrollo dokumentin në Firebase
Console dhe bëj refresh. Produkti duhet të mbetet.

## 8. Editimi — Update (10 minuta)

Butoni Edit kalon produktin te `EditProduct` përmes props. Formulari hapet me
vlerat ekzistuese. `key={editingProduct.id}` i jep formularit state të ri kur
zgjedhim produkt tjetër.

Te funksioni `updateProduct`:

```js
const { id, ...productData } = updatedProduct;
await updateDoc(doc(db, 'products', id), productData);
```

`doc` gjen dokumentin sipas ID-së; `updateDoc` i ruan fushat e ndryshuara.
Pastaj përdorim të njëjtin `map` si dita12 për të përditësuar state.
Editimi mbyllet vetëm pas ruajtjes me sukses. Cancel nuk shkruan në databazë.

**Provoje tani:** ndrysho çmimin në 700, ruaj, rifresko dhe kontrollo Firestore.
Duhet të ndryshojë dokumenti ekzistues, pa u krijuar produkt i dytë.

## 9. Fshirja — Delete (5 minuta)

Te `deleteProduct` kërkojmë konfirmim dhe pastaj:

```js
await deleteDoc(doc(db, 'products', productId));
```

Vetëm pas suksesit e heqim produktin nga state me `filter`, njësoj si në dita12.
Këto katër veprime quhen CRUD: Create, Read, Update, Delete.

Gjatë ruajtjes `saving` çaktivizon formularin dhe veprimet për të shmangur klikimet
e përsëritura. `loading` shfaq pritjen gjatë leximit të parë.

## 10. Kontrolli dhe detyra (15 minuta)

1. Shto dy produkte në kategori të ndryshme dhe filtroji.
2. Rifresko faqen: të dy produktet duhet të mbeten.
3. Edito emrin dhe një çmim me presje dhjetore, p.sh. `19.99`.
4. Anulo editimin: databaza duhet të mbetet si më parë.
5. Fshi një produkt dhe rifresko: produkti nuk duhet të kthehet.
6. Hape aplikacionin në një tab tjetër dhe kontrollo të njëjtën listë pas refresh.
7. Publiko përkohësisht rregullin që ndalon qasjen nga seksioni 3 dhe provo
   shtimin: duhet të shfaqet gabimi dhe formulari të mos pastrohet. Rikthe
   rregullin e testimit me afatin ekzistues vetëm nëse ushtrimi vazhdon.

Detyrë: shto fushën `stock` në të dy formularët, ruaje si numër dhe shfaqe te
produkti. Pastaj provo shtim, editim dhe refresh.

Pyetje: Pse `setProducts` nuk mjafton për ruajtjen? Pse përdorim `await`?
Kush e krijon ID-në? Cili është dallimi mes `collection` dhe `doc`?

## Nëse nuk punon

- Udhëzimi për konfigurim: plotëso çdo vlerë `VENDOS_...` në `src/firebase.js`.
- `Missing or insufficient permissions`: kontrollo Firestore Rules dhe afatin e test mode.
- Gabim konfigurimi: kopjo objektin Web nga projekti i saktë; sigurohu që
  Cloud Firestore `(default)` është krijuar.
- Pritje e gjatë: kontrollo internetin; shkrimet presin konfirmim nga databaza.
- Produktet janë të një nxënësi tjetër: po përdorni të njëjtin Firebase project.
- Fotoja nuk shfaqet: përdor URL publike që hapet direkt si imazh.

Kontrolli teknik i projektit:

```bash
npm run lint
npm run build
```

## Burime zyrtare

- [Konfigurimi i Firebase për Web](https://firebase.google.com/docs/web/setup)
- [Fillimi me Firestore](https://firebase.google.com/docs/firestore/quickstart)
- [Shtimi dhe editimi i dokumenteve](https://firebase.google.com/docs/firestore/manage-data/add-data)
- [API për lexim dhe CRUD](https://firebase.google.com/docs/reference/js/firestore)
- [Fshirja e dokumenteve](https://firebase.google.com/docs/firestore/manage-data/delete-data)
- [Firestore Security Rules](https://firebase.google.com/docs/firestore/security/get-started)
