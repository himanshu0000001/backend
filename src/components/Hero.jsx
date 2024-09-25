const HeroSection = () =>{
    return (
        <main className="hero container">
            <div className="hero-content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro illo, tempora necessitatibus minima provident, veniam nisi blanditiis maiores vitae nihil maxime eos praesentium quas sunt. Non, cum! Optio, recusandae beatae!</p>
                <div className="hero-btn">
                    <button>Shop now</button>
                    <button className="secondary-btn">Category</button>
                    </div>
                    <div className="brand-icons">
                        <img src="/images/amazon.png" alt="amazon-logo"/>
                        <img src="/images/flipkart.png" alt="flipkart-logo"/>
                        
                        </div>        
            
            </div>
            <div className="shopping"></div>
            <div className="hero-image">
            <img src="/images/hero-image.png" alt="hero-logo"/>
            </div>
            
            
        </main>
    );
};
export default HeroSection;