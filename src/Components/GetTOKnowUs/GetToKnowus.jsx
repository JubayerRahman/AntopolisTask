import img1 from "../../assets/knowUs1.jpeg"
import img2 from "../../assets/knowUs2.jpeg"

const GetToKnowus = () => {
  return (
    <div className='gotToKnowUS'>
      <h1>Get to know us</h1>
      <div className="col1">
        <img src={img1} alt="" />
        <div>
            <h1>Teamwork is the key to our sucess</h1>
            <p>At TasteNow we make sure that every decision is determined by a team of us. Everyone´s opinion matters, and as group, we are stronger. We firmly belive that team work, makes the dream work.</p>
        </div>
      </div>
      <div className="col2">
        <img src={img2} alt="" />
        <div>
            <h1>We are all in for the enviroment</h1>
            <p>TasteNow donates $1 penny for every purchase made from the app to an organization that takes care of our enviromet. We belive that with everyone´s help, we can make a better world. </p>
        </div>
      </div>
    </div>
  )
}

export default GetToKnowus
