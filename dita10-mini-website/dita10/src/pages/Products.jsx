import React from 'react'
import '../App.css';
const courses = [
  {
    id: 1,
    type: 'Frontend',
    name: 'React JS',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png',
    duration: '3 muaj',
    link: 'https://shkolladigjitale.com/courses/react-js',
  },
  {
    id: 2,
    type: 'Backend',
    name: 'Node JS',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png',
    duration: '3 muaj',
    link: 'https://shkolladigjitale.com/courses/node-js',
  },
  {
    id: 3,
    type: 'Fullstack',
    name: 'MongoDB',
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/MongoDB_Fores-Green.svg/500px-MongoDB_Fores-Green.svg.png',
    duration: '6 muaj',
    link: 'https://shkolladigjitale.com/courses/mern',
  },
  {
    id: 4,
    type: 'Frontend',
    name: 'Angular',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png',
    duration: '3 muaj',
    link: 'https://shkolladigjitale.com/courses/angular',
  },
  {
    id: 5,
    type: 'Design',
    name: 'UI/UX Design',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Linux_kernel_INPUT_OUPUT_evdev_gem_USB_framebuffer.svg/960px-Linux_kernel_INPUT_OUPUT_evdev_gem_USB_framebuffer.svg.png',
    duration: '2 muaj',
    link: 'https://shkolladigjitale.com/courses/ui-ux',
  },
  {
    id: 6,
    type: 'Mobile',
    name: 'React Native',
    image: 'https://reactnative.dev/img/header_logo.svg',
    duration: '3 muaj',
    link: 'https://shkolladigjitale.com/courses/react-native',
  },
];

function CourseList({ courses }) {
  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h3 style={{ textAlign: 'center', marginBottom: '30px' }}>Kurset e Shkollës Digjitale</h3>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
        gap: '20px' 
      }}>
        {courses.map((course) => (
          <div key={course.id} style={{ 
            border: '1px solid #ddd', 
            borderRadius: '8px', 
            overflow: 'hidden',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
          }}>
            <img 
              src={course.image} 
              alt={course.name} 
              style={{ 
                width: '100%', 
                height: '200px', 
                objectFit: 'contain',
                backgroundColor: '#f5f5f5',
                padding: '10px'
              }} 
              onError={(e) => {
                e.target.onerror = null; 
                e.target.src = 'https://via.placeholder.com/300x200?text=Course+Image';
              }}
            />
            <div style={{ padding: '15px' }}>
              <h4 style={{ marginTop: '0' }}>{course.name}</h4>
              <p><strong>Tipi:</strong> {course.type}</p>
              <p><strong>Kohëzgjatja:</strong> {course.duration}</p>
              <a 
                href={course.link} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  padding: '8px 15px',
                  backgroundColor: '#007bff',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '4px',
                  marginTop: '10px'
                }}
              >
                Mëso më shumë
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Products() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>Shkolla Digjitale - Kurset Programimit</h1>
      <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 30px', lineHeight: '1.6' }}>
        Zgjidhni një nga kurset tona për të mësuar teknologjitë më të kërkuara në treg. 
        Trajnime praktike me instruktorë me përvojë në industri.
      </p>
      <CourseList courses={courses} />
    </div>
  );
}

export default Products;