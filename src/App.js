import logo from './logo.svg';
import './App.css';

let simpsons = [
  {name:'Барт', surname: 'Simpson', age:10, info:'Бартоломью Джо-Джо «Барт» Симпсон (англ. Bartholomew Jo-Jo «Bart» Simpson) — герой мультипликационного сериала «Симпсоны».', photo:'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'},
  {name:'Гомер', surname: 'Simpson', age:40, info:'Гоме́р Джей Си́мпсон (англ. Homer Jay Simpson) — один из главных героев мультсериала «Симпсоны» и отец в одноимённой семье. ', photo:'https://upload.wikimedia.org/wikipedia/uk/0/02/Homer_Simpson_2006.png'},
  {name:'Мардж', surname: 'Simpson', age:38, info:'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. ', photo:'https://upload.wikimedia.org/wikipedia/ru/thumb/0/0b/Marge_Simpson.png/217px-Marge_Simpson.png'},
  {name:'Лиза', surname: 'Simpson', age:9, info:'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.', photo:'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'},
  {name:'Мегги', surname: 'Simpson', age:1, info:'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. ', photo:'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'},

];


function App() {
  return (
    <div>
      {
        simpsons.map(value => <div>
              <h2> {value.name} {value.surname}, age - {value.age} </h2>
              <img src={value.photo} alt=""/>
              <div> {value.info} </div>
            </div>

        )
      }
    </div>
  );
}

export default App;
