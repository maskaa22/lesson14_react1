import './Simpson.css'
export default function Simpson({item:{name, surname, age, photo, info}})
{
    let c1='target';
    let c2='point';
    let clList=['jack', 'black', 'door'];
    return (
        <div className={c1+' '+c2}>
            <h2 className={clList.join(' ')}> {name} {surname}, age - {age} </h2>
            <img src={photo} alt=""/>
            <div> {info} </div>
        </div>
    );
}