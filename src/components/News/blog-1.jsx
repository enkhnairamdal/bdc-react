import Navbar from "./navbar";
import RelatedBlog from "./relatedBlog";
import Top from "./topSection";

export default function Blog1 (){
    return(
       <div>
        <Navbar/>
        <Top/>
        <section className="blog-detail-main ptb-100">
            <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="blog-detail-img" >
                        <img style={{width: "100%"}} src="images/news-one.jpg"  alt="blog"/>
                    </div>
                    <div className="blog-detail-content">
                        <ul>
                            <li>December 14,2021</li>
                            <li>by MDKI</li>
                        </ul>
                        <h2>Биткойн олборлолт гэж вэ? </h2>
                        <p>Биткойныг олборлоход маш их хүчин чадалтай компьютер болон сэрүүн нөхцөл хэрэгтэй юм. Энгийн бид бүгдийн хэрэглэдэг компьютер хэрэглэвэл нэг биткойн гаргах гэж магадгүй нэгээс илүү жил зарцуулах юм. Одоогийн байдлаар нийт 21 сая биткойн олборлогдох ёстойгоос 16 сая биткойн олборлосон байгаа. Нийт биткойныг олборлож дуусах хугацааг 2040 гэж тооцоолж байгаа юм. Биткойны тухайн систем нь 4 жил тутамд биткойн олборлолтыг 50% аар багасгаж байхаар алгоритм нь бичигдсэн байдаг. </p>

                        <p style={{fontWeight: "bold"}}>Биткойн хэрхэн олборлох вэ?</p>
                        <p>Ерөнхийдөө бол Биткойныг олборлох үндсэн хоёр арга бий:</p>
                        <p><span style={{textDecoration: "italic"}}>Төхөөрөмжөөр олборлох:</span>  Төхөөрөмжөөр олборлох гэдэг нь тооцоолон бодох чадвартай бүхий л төхөөрөмжүүдийг хэлж буй хэлбэр. Танай гэрийн компьютер, лаптоп тэр бүү хэл таны утас ч биткойныг олборлох боломжтой. Гагцхүү маш удаан хурдаар олборлоно. Анх биткойныг ердийн суурин компьютероор олборлодог байсан бол одоо үед зөвхөн биткойн олборлоход зориулсан төхөөрөмж хүртэл бий болсон. Уг төхөөрөмж нь ердийн компьютероос хэдэн арав зуу сая дахин хурдан олборлодог.</p>
                        <blockquote>Bitfury компани биткойн олборлоох төхөөрөмж үйлдвэрлэдэг бөгөөд хүчин чадал, үзүүлэлтээрээ дэлхийд тэргүүлэгч юм. </blockquote>
                        <p>Үүлэн олборлолт хийх (Cloud Mining): Үүлэн олборлолт гэдэг нь төхөөрөмж авахгүйгээр биткойн олборлохыг хэлдэг. Энэ нь үүлэн олборлолтын үйлчилгээ үзүүлдэг баталгаатай вэб сайтуудаас биткойн олборлох хурд түрээсэлж авдаг ба уг хурдаараа биткойн олборлодог юм. Уг вэб сайтуудын ард маш том дата центер маягийн биткойн олборлодог төхөөрөмжүүд байгаа бөгөөд үүнийхээ тодорхой хэсгийг таньд түрээслүүлж буй хэлбэр юм.</p>
                    </div>
                </div>
            </div>
            <RelatedBlog/>
            </div>
        </section>
       </div>
    )
}