import React from 'react';
import Slider from 'react-slick';
import Isvg from 'react-inlinesvg';
import IconChevronLeft from '../Icons/icon-chevron-left.svg';
import IconChevronRight from '../Icons/icon-chevron-right.svg';
import './Slick.scss';
import './SimpleSlider.scss';

function NextArrow(props) {
    const { className, style, onClick } = props
    return (
        <div
            className={className}
            style={{...style, display: 'block' }}
            onClick={onClick}
        ><Isvg src={IconChevronRight} /></div>
    );
}

function PrevArrow(props) {
  const {className, style, onClick} = props
  return (
    <div
      className={className}
      style={{...style, display: 'block' }}
      onClick={onClick}
    ><Isvg src={IconChevronLeft} /></div>
  );
}

class SimpleSlider extends React.Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />
        };

        return (
            <div className='slider'>
                <Slider {...settings}>
                    {this.props.children.map(c => c)}
                </Slider>
            </div>
        );
    }
}

export default SimpleSlider;
