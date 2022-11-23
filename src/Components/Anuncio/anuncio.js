
import { Carousel } from 'react-carousel-minimal';

function anuncios() {
 const anuncio = [
    {
        image: "https://scontent.fsal11-1.fna.fbcdn.net/v/t39.30808-6/316544919_5559165220862532_5449184051569438375_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=EhJB5UNBeZ0AX94rLyX&_nc_oc=AQkUnpFiuJczc9AFgk8n9RsC-0zlTj3UzLmjR4CXhskkk7fAwOf6ChKQyOw9b2u8iReYUjYWcMv2QHzmGp3PM0pr&_nc_ht=scontent.fsal11-1.fna&oh=00_AfBIrmzck6JDBBVFgH6y0tO29qWKHoAi8TFmLni8E_l26Q&oe=638284A5",
        caption: "Freund",
        
      },
      {
        image: "https://scontent.fsal3-1.fna.fbcdn.net/v/t39.30808-6/315901040_5808250152572668_4915696175007269742_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=wffU0D91vkcAX_ZO_YT&_nc_ht=scontent.fsal3-1.fna&oh=00_AfCh0UE7_y-kzLh1XspvJw41ao52Tqh_FSDVigQykfRong&oe=63832FFA",
        caption: "Promocion",
        },
      {
        image: "https://scontent.fsal2-1.fna.fbcdn.net/v/t1.6435-9/92608590_2518208895162043_6537407177651388416_n.jpg?stp=cp0_dst-jpg_e15_p526x296_q65&_nc_cat=101&ccb=1-7&_nc_sid=2d5d41&_nc_ohc=NcALIGYEBmEAX8scD02&_nc_ht=scontent.fsal2-1.fna&oh=00_AfA70Z8ozIKw-xSmp7HN3h9jSDSVsLheNKsmZRzkOYgNVA&oe=63A4F564",
        caption: "Cerveza Pilsener",
      },
      {
        image: "https://i0.wp.com/www.ofertasahora.com/wp-content/uploads/2021/11/todas-las-ofertas-blackfriday-2021-de-walmart-el-salvador.jpg?fit=300%2C300&ssl=1",
        caption: "Walmart",
      },
      {
        image: "https://scontent.fsal2-1.fna.fbcdn.net/v/t39.30808-6/316523919_5753314721372324_1938477454592204846_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=rsIopaR_V6YAX_CWaTq&_nc_ht=scontent.fsal2-1.fna&oh=00_AfDYEUaS5fwpTOt9yONV_vBw7SuILq0zLQW_EoN90Q1_1w&oe=638342D5",
        caption: "Bufalo",
      }
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  /* const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  } */
  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        <h2></h2>
        <p>PROMOCIONES</p>
        <div style={{
          padding: "0 20px"
        }}>
          <Carousel
            data={anuncio}
            time={2000}
            width="1000px"
            height="500px"
            captionStyle={captionStyle}
            radius="5px"
            //captionPosition="bottom"
            automatic={true}
            dots={true}
            //pauseIconColor="white"
            //pauseIconSize="40px"
            slideBackgroundColor="white"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "550px",
              maxHeight: "600px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default anuncios;

