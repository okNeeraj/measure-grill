import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { MutableRefObject, useEffect, useRef, useState } from 'react'
import { PAGE } from '@routes/index'
import { Link } from 'react-router-dom'

const FeatureSection = () => {
  const settingsMain = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav', // Ensure this matches the class name of your thumbnail slider
  }

  const settingsThumbnails = {
    dots: false,
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 5,
    focusOnSelect: true,
    asNavFor: '.slider-main', // Ensure this matches the class name of your main slider
  }

  const features = {
    thumbnails: [
      {
        title: 'Automation',
        icon: 'globe',
      },
      {
        title: 'Performance',
        icon: 'sdk',
      },
      {
        title: 'Historical Data',
        icon: 'auto_transmission',
      },
      {
        title: 'Custom Alert',
        icon: 'add_alert',
      },
      {
        title: 'AMP Validation',
        icon: 'bolt',
      },
      {
        title: 'Web Vitals Trends',
        icon: 'trending_up',
      },
    ],
    slides: [
      'Streamline your agency processes for growth',
      'Grow organic traﬃc with our complete and easy SEO tools & workﬂow',
      'Unveil your competitors’ marketing strategy and tactics',
      'Discover how to reach more prospects while spending less',
      'Build your most effective performant website strategy',
      'See the trend shift in web vital performance',
    ],
  }

  const [nav1, setNav1] = useState(null)
  const [nav2, setNav2] = useState(null)
  let sliderRef1 = useRef(null)
  let sliderRef2 = useRef(null)

  useEffect(() => {
    setNav1(sliderRef1)
    setNav2(sliderRef2)
  }, [])

  return (
    <div className="py-8 m-auto bg-white container rounded-md shadow-lg shadow-gray-100 mb-12 mt-[-60px]">
      <>
        <div className="slider-container feature-slider">
          <Slider
            className="feature-thumbnails"
            asNavFor={nav1}
            ref={(slider: MutableRefObject<null>) => (sliderRef2 = slider)}
            slidesToShow={6}
            swipeToSlide={false}
            focusOnSelect={true}
            centerMode={true}
            arrows={false}
            centerPadding={'50px'}
          >
            {features.thumbnails.map((thumb, index) => (
              <div key={index}>
                <div className="flex flex-col justify-center items-center gap-2">
                  <div className="material-symbols-outlined text-5xl thumb-icon">{thumb.icon}</div>
                  <div className="text-lg">{thumb.title}</div>
                </div>
              </div>
            ))}
          </Slider>
          <Slider className="slider-main" arrows={false} asNavFor={nav2} ref={(slider: MutableRefObject<null>) => (sliderRef1 = slider)}>
            {features.slides.map((slide, index) => (
              <div className="px-6" key={index}>
                <div className="grid grid-cols-2">
                  <div className="p-8">
                    <h1 className="text-4xl font-bold mb-4">{slide}</h1>
                    <p className="text-xl mb-6">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum cumque quidem dolore? Delectus tempore sequi deleniti placeat
                      reprehenderit voluptate, cumque ab dolore laboriosam repellat amet modi corporis eos. Veniam, quod.
                    </p>
                    <Link
                      to={PAGE['login']}
                      className="inline-flex items-center gap-4 px-24 py-4 bg-violet-800 text-sm text-white border border-violet-800 rounded-md"
                    >
                      <span className="material-symbols-outlined">arrow_right_alt</span>
                      <span className="uppercase text-xs font-bold">Try Now</span>
                    </Link>
                  </div>
                  <div className="flex-growh">
                    <img src="https://cdn.semrush.com/static/index/tools-new/seo.94e1f354aed0.svg" alt="SEO" />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </>
    </div>
  )
}

export default FeatureSection
