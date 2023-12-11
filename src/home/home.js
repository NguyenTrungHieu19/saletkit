import styles from './index.module.scss'
import Header from '../header/header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComputer, faDisplay, faGear, faChartLine, faCircleCheck , faCircleRight } from '@fortawesome/free-solid-svg-icons'
import banner from '../image/banner.jpg'
const Home = () => {
    return (
        <>
            <Header />
            <div className={styles.container}>
                <div className={styles.banner}>
                    <img src={ banner}/>
                    <div className={styles.banner_category_wapper}>
                            <div className={styles.banner_category_content}>
                                <h2>Dịch vụ chuyên thiết kế website</h2>
                                <h1>CHUYÊN NGHIỆP, TRỌN GÓI</h1>
                                <p>Tất cả nhưng gì bạn cần để có doanh số vượt trội bán hàng đa kênh, Tự động</p>
                                <p>Website |Affilitate | LandingPage | ChatBot</p>
                                <button>
                                     Dùng thử miễn phí 
                                    <FontAwesomeIcon icon={faCircleRight}/>
                                </button>
                            </div>
                    </div>
                </div>
                <div className={styles.packages}>
                    <h3>Thiết kế website trọn gói của salekit bao gồm những gì?</h3>
                    <p className={styles.packages_title}>Dù bạn đang kinh doanh bất cứ nghành hàng nào, salekit đều hỗ trợ bạn xây dựng website bán hàng, trọn gói, tự động chuẩn seo, chuẩn UI-UX, và ra đơn đều đặn mỗi ngày</p>
                    <div className={styles.packages_container}>
                        <div className={styles.packages_content}>
                            <FontAwesomeIcon className={styles.icon_package} icon={faComputer} />
                            <p>Hệ thống quản lý đơn giản</p>
                        </div>
                        <div className={styles.packages_content}>
                            <FontAwesomeIcon className={styles.icon_package} icon={faComputer} />
                            <p>Tùy chỉnh giao diện theo ý muốn</p>
                        </div>
                        <div className={styles.packages_content}>
                            <FontAwesomeIcon className={styles.icon_package} icon={faComputer} />
                            <p>Liên tục nâng cấp bổ sung tính năng mới</p>
                        </div>
                        <div className={styles.packages_content}>
                            <FontAwesomeIcon className={styles.icon_package} icon={faComputer} />
                            <p>Dịch vụ trọn gói, hỗ trợ chọn đời</p>
                        </div>

                    </div>
                </div>
                <div className={styles.banner_seo_wapper}>
                    <div className={styles.banner_seo}>
                        <h2 className={styles.seo_title}>Thiết kế website tại saleKit gồm có</h2>
                        <img src={banner}/>
                        <div className={styles.button_wapper}>
                            <div className={styles.banner_button}>
                                <FontAwesomeIcon icon={faComputer} />
                                <p>100++ giao diện đẹp</p>
                            </div>
                            <div className={styles.banner_button}>
                                <FontAwesomeIcon icon={faDisplay} />
                                <p>Tốc độ tải nhanh</p>
                            </div>
                            <div className={styles.banner_button}>
                                <FontAwesomeIcon icon={faGear} />
                                <p>Tích hợp automaiton</p>
                            </div>
                            <div className={styles.banner_button}>
                                <FontAwesomeIcon icon={faChartLine} />
                                <p>Báo cáo thống kê</p>
                            </div>
                        </div>
                        <div className={styles.bannner_introduce}>
                            <div className={styles.introduce_content}>
                                <FontAwesomeIcon className={styles.icon_seo} icon={faComputer} />
                                <div className={styles.introduce_title}>
                                    <h3>Giao diện chuẩn SEO</h3>
                                    <p>Các giao diện web tại saleKit được thiết kế hiện đại, tối ưu theo tiêu chí xếp hạng của google</p>
                                </div>
                            </div>
                            <div className={styles.introduce_content}>
                                <FontAwesomeIcon className={styles.icon_seo} icon={faComputer} />
                                <div className={styles.introduce_title}>
                                    <h3>Hiển thị trên mọi loại thiết bị</h3>
                                    <p>Các giao diện đều được tối ưu responsive, để thể hiện tốt trên các thiết bị PC, Laptop, TabLet và Mobile</p>
                                </div>
                            </div>
                            <div className={styles.introduce_content}>
                                <FontAwesomeIcon className={styles.icon_seo} icon={faComputer} />
                                <div className={styles.introduce_title}>
                                    <h3>Tùy biến bố cục web dễ dàng</h3>
                                    <p>Mỗi trang web đều có bố cục riêng với 30 tiện ích (wibget) bạn có thể thay đổi dễ dàng bằng cách kéo thả</p>
                                </div>
                            </div>
                        </div>
                    <div/>
                        <div className={styles.choose_package}>
                            <h1>Thiết kế chọn gói của saleKit bao gồm những gì?</h1>
                            <h5>giống như dịch vụ xây nhà trọn gói. Salekit làm toàn bộ và bàn giao cho bạn website hoàn chỉnh. tích hơp đầy đủ công cụ automation</h5>
                            <div className={styles.choose_package_navbar}>
                                <div className={styles.packages_navbar_content}>
                                    <div className={styles.round}>1 </div>
                                    <div className={styles.packages_navbar_box}>
                                        <p className={styles.navbar_box_title}>
                                            Thiết kế bộ nhận diện thương hiệu:logo,icon,avatar,silder,thumbnail,email,bannenr,..
                                        </p>
                                    </div>
                                </div>
                                <div className={styles.packages_navbar_content}>
                                    <div className={styles.round}>2</div>
                                    <div className={styles.packages_navbar_box}>
                                        <p className={styles.navbar_box_title}>
                                            Thiết kế bộ nhận diện thương hiệu:logo,icon,avatar,silder,thumbnail,email,bannenr,..
                                        </p>
                                    </div>
                                </div>
                                <div className={styles.packages_navbar_content}>
                                    <div className={styles.round}>3</div>
                                    <div className={styles.packages_navbar_box}>
                                        <p className={styles.navbar_box_title}>
                                            Thiết kế bộ nhận diện thương hiệu:logo,icon,avatar,silder,thumbnail,email,bannenr,..
                                        </p>
                                    </div>
                                </div>
                                <div className={styles.packages_navbar_content}>
                                    <div className={styles.round}>4</div>
                                    <div className={styles.packages_navbar_box}>
                                        <p className={styles.navbar_box_title}>
                                            Thiết kế bộ nhận diện thương hiệu:logo,icon,avatar,silder,thumbnail,email,bannenr,..
                                        </p>
                                    </div>
                                </div>
                                <div className={styles.packages_navbar_content}>
                                    <div className={styles.round}>5</div>
                                    <div className={styles.packages_navbar_box}>
                                        <p className={styles.navbar_box_title}>
                                            Thiết kế bộ nhận diện thương hiệu:logo,icon,avatar,silder,thumbnail,email,bannenr,..
                                        </p>
                                    </div>
                                </div>
                                <div className={styles.packages_navbar_content}>
                                    <div className={styles.round}>6</div>
                                    <div className={styles.packages_navbar_box}>
                                        <p className={styles.navbar_box_title}>
                                            Thiết kế bộ nhận diện thương hiệu:logo,icon,avatar,silder,thumbnail,email,bannenr,..
                                        </p>
                                    </div>
                                </div>
                                <div className={styles.packages_navbar_content}>
                                    <div className={styles.round}>7</div>
                                    <div className={styles.packages_navbar_box}>
                                        <p className={styles.navbar_box_title}>
                                            Thiết kế bộ nhận diện thương hiệu:logo,icon,avatar,silder,thumbnail,email,bannenr,..
                                        </p>
                                    </div>
                                </div>
                                <div className={styles.packages_navbar_content}>
                                    <div className={styles.round}>8</div>
                                    <div className={styles.packages_navbar_box}>
                                        <p className={styles.navbar_box_title}>
                                            Thiết kế bộ nhận diện thương hiệu:logo,icon,avatar,silder,thumbnail,email,bannenr,..
                                        </p>
                                    </div>
                                </div>
                                <div className={styles.packages_navbar_content}>
                                    <div className={styles.round}>9</div>
                                    <div className={styles.packages_navbar_box}>
                                        <p className={styles.navbar_box_title}>
                                            Thiết kế bộ nhận diện thương hiệu:logo,icon,avatar,silder,thumbnail,email,bannenr,..
                                        </p>
                                    </div>
                                </div>
                                <div className={styles.packages_navbar_content}>
                                    <div className={styles.round}>10</div>
                                    <div className={styles.packages_navbar_box}>
                                        <p className={styles.navbar_box_title}>
                                            Thiết kế bộ nhận diện thương hiệu:logo,icon,avatar,silder,thumbnail,email,bannenr,..
                                        </p>
                                    </div>
                                </div>
                                <div className={styles.packages_navbar_content}>
                                    <div className={styles.round}>11</div>
                                    <div className={styles.packages_navbar_box}>
                                        <p className={styles.navbar_box_title}>
                                            Thiết kế bộ nhận diện thương hiệu:logo,icon,avatar,silder,thumbnail,email,bannenr,..
                                        </p>
                                    </div>
                                </div>
                                <div className={styles.packages_navbar_content}>
                                    <div className={styles.round}>12</div>
                                    <div className={styles.packages_navbar_box}>
                                        <p className={styles.navbar_box_title}>
                                            Thiết kế bộ nhận diện thương hiệu:logo,icon,avatar,silder,thumbnail,email,bannenr,..
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div>
                            <h3>Quy trình xây dựng webstie bán hàng</h3>
                        </div> */}
                        <div className={styles.service_wapper}>
                            <h2>Bảng giá dịch vụ thiết kế website chọn gói</h2>
                            <div className={styles.table_price_service}>
                                <div className={styles.price_service_backgroud_available}>
                                    <div className={styles.service_avaliable}>
                                        <div className={styles.avaliable_title}>
                                            <p>Theo mẫu có sẵn</p>
                                        </div>
                                        <div className={styles.avaliable_price}>
                                            <p>5.000.000</p>
                                        </div>
                                        <div className={styles.avalibale_content}>
                                            <div className={styles.content_text_avaliable}>
                                                <FontAwesomeIcon className={styles.icon_avalibale} icon={faCircleCheck} />
                                                <p>Thiết kế giao diện theo mẫu có sẵn</p>
                                            </div>
                                            <div className={styles.content_text_avaliable}>
                                                <FontAwesomeIcon className={styles.icon_avalibale} icon={faCircleCheck} />
                                                <p>Thời gian triển khai 3-5 ngày</p>
                                            </div>
                                            <div className={styles.content_text_avaliable}>
                                                <FontAwesomeIcon className={styles.icon_avalibale} icon={faCircleCheck} />
                                                <p>Giao diện chuyên nghiệp, chuẩn responsive</p>
                                            </div>
                                            <div className={styles.avalibale_button}>
                                                <button>Đăng kí ngay</button>
                                            </div>
                                        </div>

                                    </div>
                                </div>                         
                            <div className={styles.price_service_backgroud_private}>
                                <div className={styles.private_avaliable}>
                                    <div className={styles.private_title}>
                                        <p>Theo mẫu có sẵn</p>
                                    </div>
                                    <div className={styles.private_price}>
                                        <p>15.000.000</p>
                                    </div>
                                    <div className={styles.private_content}>
                                        <div className={styles.content_text_private}>
                                            <FontAwesomeIcon className={styles.icon_private}  icon={faCircleCheck} />
                                            <p>Thiết kế giao diện riêng không có trong thư viện của saleKit</p>
                                        </div>
                                        <div className={styles.content_text_private}>
                                            <FontAwesomeIcon className={styles.icon_private} icon={faCircleCheck} />
                                            <p>Thời gian triển khai 5-10 ngày</p>
                                        </div>
                                        <div className={styles.content_text_private}>
                                            <FontAwesomeIcon className={styles.icon_private} icon={faCircleCheck} />
                                            <p>Khách hàng duyệt bố cục trước khi tiến hành triển khai</p>
                                        </div>
                                        <div className={styles.private_button}>
                                            <button>Đăng kí ngay</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className={styles.price_service_backgroud_complicated}>
                                <div className={styles.service_complicated}>
                                    <div className={styles.complicated_title}>
                                        <p>Theo mẫu phức tạp</p>
                                    </div>
                                    <div className={styles.complicated_price}>
                                        <p>30.000.000</p>
                                    </div>
                                    <div className={styles.complicated_content}>
                                        <div className={styles.content_text_complicated}>
                                            <FontAwesomeIcon className={styles.icon_complicated} icon={faCircleCheck} />
                                            <p>Khách hàng không được yêu cầu tính năng riêng hoặc nâng cấp thay đổi/các tính năng có sẵn</p>
                                        </div>
                                        <div className={styles.content_text_complicated}>
                                            <FontAwesomeIcon className={styles.icon_complicated} icon={faCircleCheck} />
                                            <p>Thời gian triển khai 20-30 ngày</p>
                                        </div>
                                        <div className={styles.content_text_complicated}>
                                            <FontAwesomeIcon className={styles.icon_complicated} icon={faCircleCheck} />
                                            <p>Hai bên thống nhất trước các tính năng và giao diện trước khi tiến hành triển khai</p>
                                        </div>
                                        <div className={styles.complicated_button}>
                                            <button>Đăng kí ngay</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Home;