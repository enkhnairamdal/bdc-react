export default function RelatedBlog (){
    return(
        <section className="blog-detail-main ptb-100">
             <div className="container">
            <div className="related-blog pt-100">
                <h3 className="blog-comment-heading">БУСАД МЭДЭЭ</h3>
                <div className="blog-slider owl-carousel">
                    <div className="blog-box">
                        <div className="blog-img mb-15">
                            <a href="/blog1"><img src="images/news-one.jpg" alt="blog"/></a>
                        </div>
                        <div className="blog-des-box">
                            <a href="/blog1" className="blog-title">Биткойн олборлолт гэж вэ? </a>
                            <ul className="blog-date">
                                <li>Decenber 14,2021</li>
                                <li>by MDKI</li>
                            </ul>
                            <p className="blog-des">Биткойныг олборлоход маш их хүчин чадалтай компьютер болон...</p>
                            <a href="/blog1" className="read-more">Дэлгэрэнгүй</a>
                        </div>
                    </div>
                    <div className="blog-box">
                        <div className="blog-img mb-15">
                            <a href="/blog2"><img src="images/news-2.jpg" alt="blog"/></a>
                        </div>
                        <div className="blog-des-box">
                            <a href="/blog2" className="blog-title">Криптогийн талаар мэдэх хэрэгтэй зүйлс</a>
                            <ul className="blog-date">
                                <li>Decenber 14,2021</li>
                                <li>by MDKI</li>
                            </ul>
                            <p>Блокчайн технологи дээр тулгуурлан бүтээгдсэн, цахим орчинд тоон... </p>
                            <a href="/blog2" className="read-more">Дэлгэрэнгүй</a>
                        </div>
                    </div>
                    <div className="blog-box">
                        <div className="blog-img mb-15">
                            <a href="/blog3"><img src="images/news-3-min.jpg" alt="blog"/></a>
                        </div>
                        <div className="blog-des-box">
                            <a href="/blog3" className="blog-title">Биткойн гэж юу вэ?</a>
                            <ul className="blog-date">
                                <li>Decenber 14,2021</li>
                                <li>by MDKI</li>
                            </ul>
                            <p>Энэ бүхэн анх 2008 оны арван нэгдүгээр сарын нэгэнд өөрийгөө Satoshi Naka...</p>
                            <a href="/blog3" className="read-more">Дэлгэрэнгүй</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
       
        
    )
}