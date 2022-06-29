import React,{useState} from 'react'
import MenuItems from './components/MenuItems'
import courses from './data'
import Reviews from './components/Reviews'


const App = () => {

  const [courseItems,setCourseItems] = useState(courses)

const courseFilter = function(category) {

if(category === 'All'){
  setCourseItems(courses)
  return;
}

let newCourse = courses.filter ((course) => course.category === category)
  setCourseItems(newCourse)
}


  return (
    <main>
      <section className="project_cta">
        <div className="title">
          <h2>My course</h2>
          <div className="title_underline"></div>
        </div>
        <MenuItems courseItems={courseItems} courseFilter={courseFilter} />
        <Reviews courseItems={courseItems} />
      </section>
    </main>
  );
}

export default App
