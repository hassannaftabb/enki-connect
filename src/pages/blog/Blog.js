import { useLocation } from 'react-router-dom';
import React, { useEffect } from 'react';
import Footer from '../../components/footer/Footer';

import { ReactComponent as ShareSVG } from '../../icons/Share.svg';
import { ReactComponent as ArrowRightSVG } from '../../icons/ArrowRight.svg';
import { ReactComponent as Line } from '../../icons/Line.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';
import { Grid, Pagination, Navigation } from 'swiper';

import image8 from '../../images/IMG8.png';
import image9 from '../../images/IMG9.png';
import image12 from '../../images/IMG12.png';
import image13 from '../../images/IMG13.png';
import image14 from '../../images/IMG14.png';
import image15 from '../../images/IMG15.png';
import image16 from '../../images/IMG16.png';
import page7Img from '../../images/pages/page-7/img-2.png';
import page8Img from '../../images/pages/page-8/advisor-2.jpg';
import usa from '../../images/usa.jpg';
import usa1 from '../../images/usa1.jpg';

import './blog.css';

const blogNew = [

  {
    id: 0,
    img: image8,
    title: 'We are launching',
    summary: `Humans are curious, and learning new things is in their nature. In today's fast-paced world, we
    would be interested in learning hundreds of skills. However, what happens when we get the time
    to learn those skills? Unfortunately, most of us do not find a reliable platform to find
    engaging courses that can teach us the skills we are interested in learning.`,
  },
  {
    id: 1,
    img: image9,
    title:
      'How Skill Focused eLearning Is Beneficial To Training In The Corporate World',
  },
  {
    id: 2,
    img: image12,
    title:
      'Cómo La Educación En Línea Especializada En Las Habilidades Beneficia La Formación En El Mundo Empresarial',
  },
  {
    id: 3,
    img: image13,
    title: 'The Importance Of Face To Face Learning',
  },
  {
    id: 4,
    img: image14,
    title: 'La Importancia De La Educación Cara A Cara',
  },
  {
    id: 5,
    img: image15,
    title: 'Challenges of E-learning During Covid-19',
  },
  {
    id: 6,
    img: image16,
    title: 'Advantages of E-Learning Platform in Education',
  },
  {
    id: 7,
    img: page7Img,
    title: 'How To Earn Money by Sharing Your Knowledge with Enki Connect',
  },
  {
    id: 8,
    img: page8Img,
    title: 'How to become a freelance advisor in 2022',
    summary: `An advisor is an expert with knowledge and experience that they use to advise their clients.
    Traditionally, companies hire advisors for efficient decision-making.
    However, now things are changing, and professionals are starting to work as freelancers.
    It benefits both sides where companies get better advice and professionals get better opportunities.`,
  },
  {
    id: 9,
    img: usa,
    title: ' How do I find an online mentor?',
    summary: `Whether you are a veteran in the industry or just about to start your career, you always have the pace for development. The direction you take will depend on the support system and motivation. Your reasons for choosing a certain career path usually exist before applying for that field. 
    `,
  },
  {
    id: 10,
    img: usa1,
    title: ' We got hacked on Meta, did you?',
    summary: `Meta, previously known as Facebook, has provided an amazing platform for businesses. Small-scale businesses can start on platforms like Instagram and Facebook for free. The combination of these platforms with good advertisement services was the reason behind several successful startups across the globe. However, several Facebook and Instagram business account users are sharing their Meta hacking experiences they got hacked. 
    `,
  },
 
];

const BlogCard = ({ onClick, image, title }) => {
  return (
    <div className="infoBarItem">
      <div className="infoBarItemTextLearn" onClick={onClick}>
        <img src={image} alt="" className="blogBCImage" />
        <div className="infoBarItemTitle">
          <div className="infoBarItemTitleBox">
            <ShareSVG />
          </div>
        </div>
        <div className="infoBarItemTextContainer">
          <div className="infoBarItemText blogTextSmaller">{title}</div>
          Learn more
          <ArrowRightSVG className="BlogArrowRight" />
        </div>
      </div>
    </div>
  );
};

const Blog = ({ history }) => {
  const { pathname } = useLocation();
  const handleSkills = (id) => {
    history.push({
      pathname: `/Blog/${id}`,
      state: {
        id: id,
      },
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const latestBlogs = blogNew.sort((a, b) => a.id - b.id);

  const latestFewItems = latestBlogs.slice(2, 6);
  const latestBlog = latestBlogs[0];

  return (
    <div className="componentFirst">
      <div className="faqMain">
        <div className="componentFirst contactBC">
          <div className="contact componentSecond">
            <div className="">
              <div className="LtBlogTitle">Our Latest Blog</div>
              <div className="blogWrapper">
                <div className="blogLeft">
                  <div className="blogBig">
                    <img
                      src={latestBlog.img}
                      width="100%"
                      alt=""
                      className="contactVid"
                    />
                  </div>
                  <div className="blogTitle">{latestBlog.title}</div>
                  <div className="blogText">{latestBlog.summary}</div>
                  <div
                    className="blogButton"
                    onClick={() => handleSkills(latestBlog.id)}
                  >
                    Read more
                  </div>
                </div>
                <div className="blogRight">
                  {latestFewItems.map((blog) => (
                    <BlogCard
                      key={blog.id}
                      image={blog.img}
                      title={blog.title}
                      onClick={() => handleSkills(blog.id)}
                    />
                  ))}
                </div>
              </div>
              {/* <div className="blogContainer">
                {latestBlogs.map((blog) => (
                  <BlogCard
                    key={blog.id}
                    image={blog.img}
                    title={blog.title}
                    onClick={() => handleSkills(blog.id)}
                  />
                ))}
              </div> */}
              <Swiper
                grid={{
                  rows: 2,
                }}
                pagination={true}
                navigation={true}
                modules={[Grid, Pagination, Navigation]}
                className="mySwiper"
                breakpoints={{
                  '@0.75': {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  '@1.00': {
                    slidesPerView: 4,
                    spaceBetween: 10,
                  },
                  '@1.50': {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                }}
                id="blogSwiper"
              >
                {latestBlogs.map((item, i) => {
                  return (
                    <div>
                      <div key={i} className="swiper_item">
                        <SwiperSlide>
                          <BlogCard
                            key={item.id}
                            image={item.img}
                            title={item.title}
                            onClick={() => handleSkills(item.id)}
                          />
                        </SwiperSlide>
                      </div>
                    </div>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
        <div className="elapse"></div>
        <Line className="Line1" />
        <Footer />
      </div>
    </div>
  );
};

export default Blog;
