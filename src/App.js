import Potato from "./Potato";

const foodLike = [
  {
    name:'chikin',
    image:'https://www.urbanbrush.net/web/wp-content/uploads/edd/2019/04/urbanbrush-20190417114405759881.png'
  },

  {
    name:'ham',
    image:'https://png.pngtree.com/element_pic/00/16/04/26571ebdaec6dfc.jpg'

  }
 
]

function renderFood(foo) {
  return <Food name={foo.name} picture={foo.image}/>
}


function App() {
  return (
    <div>
      {
        foodLike.map(renderFood)
      }

    </div>
  );
}

function Food({name,picture}) {
  //console.log(props);
  return(
    <div>
    <h3>I love {name}</h3>
    <img src={picture}/>
    </div>
  );
}

export default App;
