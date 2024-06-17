import './Home.scss'

const Home = () => {

    const data = [
        {title:'Hotel',link:'/hotel',img:'https://images.bubbleup.com/width1920/quality35/mville2017/1-brand/1-margaritaville.com/gallery-media/220803-compasshotel-medford-pool-73868-1677873697-78625-1694019828.jpg'},
        {title:'Excursions',link:'/excursions',img:'https://tirastour.com.ua/media/k2/items/cache/358873fad4914931314b94f2036b503a_XL.jpg'},
        {title:'Transfer',link:'/transfer',img:'https://atrixgo.com/assets/img/v2/transfer.jpg'},
        {title:'Rent a car',link:'/car-rent',img:'https://rentcarkerala.in/assets/media/content/b-main-slider/bg-1.jpg'},
        {title:'Boat Rental',link:'/boat-rent',img:'https://captainhookrentals.com/cdn/shop/products/IMG_0001-1_4000x@3x.progressive.jpg?v=1581835473'},
        {title:'Entertainment',link:'/entertainment',img:'https://images.alphacoders.com/995/995676.jpg'},
        {title:'Restaurants',link:'/restaurants',img:'https://wallpapercave.com/wp/wp1874183.jpg'},
        {title:'Adventure',link:'/adventure',img:'https://lh3.googleusercontent.com/proxy/CNxRaaFKU3oS5GRWio673xRaSXRYLVsSpDKkoelmdYgKMFz0rI6KlvCQ_9iHi7cSGOGKaB3aTwuooIaMj9YN19Zm6uPNvsllbnpqBEstq9iVnqxuC3HZeopqE9OGBIqgCwfEmblJZ7LEHg'},
        {title:'Spa',link:'/spa',img:'https://c4.wallpaperflare.com/wallpaper/231/111/776/relax-girl-massage-wallpaper-preview.jpg'},
        {title:'Mobil',link:'/mobil',img:'https://wallpapers.com/images/featured/4k-car-g6a4f0e15hkua5oa.jpg'},
        {title:'Real estate',link:'/real-estate',img:'https://wallpapers.com/images/hd/real-estate-tropical-mansion-20c9os156eqcqd4j.jpg'},
    ]
  return (
    <div className='home'>
        <div className="home__inner container">
            <h1 className='home__h1'>WELCOME!</h1>


<div className="grid-container">
    {data.map((item,idx)=>{
        return <div key={idx} className='item' style={{backgroundImage:`url(${item.img})`,backgroundSize:'cover'}}>
        <span>{item.title}</span>
             </div>
    })}
</div>
            
        </div>
    </div>
  )
}

export default Home