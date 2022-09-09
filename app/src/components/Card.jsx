import { Link } from 'react-router-dom';
function Card(props) {
  const data = props.data;
  //   const data = {
  //     title: 'Baby',
  //     venue: 'Plan B',
  //     date: '2022-10-09',
  //     artist: 'Justin Bieber',
  //     image:
  //       'https://th.bing.com/th/id/OIP.wfg6sIM0YAd9wYn9Vj8QtwHaJf?pid=ImgDet&rs=1',
  //   };
  return (
    <>
      {/* <div className='card'>
        <img src={data.image} alt='' />
        <div className='container'>
          <h4>Justin Bieber</h4>
          <p>Live at Plan B, 2022-10-08</p>
          <button>Buy ticket</button>
        </div>
      </div> */}
      <div className='card'>
        <div className='header'>{/* <img src={data.image} alt='' /> */}</div>
        <div className='text'>
          <h1 className='food'>{data.artist}</h1>
          <i className='fa fa-clock-o'> 15 Mins</i>
          <i className='fa fa-users'> Serves 2</i>

          <p className='info'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum,
            temporibus.
          </p>
        </div>
        <a href='#' className='btn'>
          Let's Cook!
        </a>
      </div>
    </>
  );
}

export default Card;
