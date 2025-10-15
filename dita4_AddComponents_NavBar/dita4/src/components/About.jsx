import React from 'react'
//Krijimi i komponenteve mund te buhet duke perdorur shkurtesat ne vazhdim: RFC, RCC dhe SFC 
//(Keto shkurtesa mund te funksionojne vetem nese i kemi te instaluara tri lloje te extensions 'React Native Tools','ES7 React' dhe 'Simple React, Snippets').
//komponentët gjithmonë fillojnë me shkronjë të madhe p.sh About Home NavBar Project....
 //const eshte nje keywords sikurse 'var' qe e kemi mesuar ne JavaScript, ku mund te perdoret per krijimin e nje variable, krijimin e nje arrays, krijimin e nje objekti dhe krijimin e nje funksioni. 
const About = () => {
    //const eshte nje keywords sikurse 'var' qe e kemi mesuar ne JavaScript, ku mund te perdoret per krijimin e nje variable, krijimin e nje arrays, krijimin e nje objekti dhe krijimin e nje funksioni. 
    const x ="Shkolla Digjitale Prizren";  //nje variable 
    const arr = [1,2,3,4,5]; //nje Array
    //nje objekt
    const obj = {    
        emri: 'Kebir',
        mbiemri: 'Cesko',
        mosha: 29
    };
    const style = { color: '#00004e',
                    backgroundColor: 'white',
                    fontWeight: 900
                   }
    return(
      <> {/*per me njoft funksioni return kodet html nese nuk ka p.sh div,section, kete rast kemi por nese nuk kemi vendosim*/}
        <section className="about"> {/*kur perdorim React vend class shenohet className */}
            {/* Ne elemente mund te vendosim edhe vlera direkt qysh kemi vendos edhe ne HTML, mirepo nese duam te vendosim vlera dinamike duhet te vendosen permes variablave. */}
            <h2>Shkolla Digjitale</h2>
            <h2 style={style}>{ x }</h2>
            <h2>{ arr }</h2>
            <h2>{obj.emri}</h2>
            <h2>{obj.mosha}</h2>
            <h2>{obj.mbiemri}</h2>
        </section>
     </>
    );
}
export default About;