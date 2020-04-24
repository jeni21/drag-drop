import React, {useState} from 'react';
import './App.css';

function App() {
  let [images, setImages] = useState([
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSFZSCPlG50YLjT7b6rWd7t6l3fZfohlWCZ3Xtsr36ys3BRwlJc&usqp=CAU',
    'https://www.philosophytalk.org/sites/default/files/styles/large_blog__900x400_/public/Untitled%20design%20%2894%29.png',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTV9Ns2RQL7uyqFqcmilXAXD8c0NSuB--v5P32Cq6aDM0eEwUse&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSBPum-27tS9Bef3cKPGeP-bicqf4KoMAnQW7upaT2-XVYw6Zq5&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTjNq_rDuuvV7U5P82SgASaPxyrXES01UUhaZ5z6LAWVzRCCdDh&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTU7t2DYAyGJgMbxBvsHLvkm0Wv4iy7abegmLiGtDftxXUiLq1g&usqp=CAU',
    'https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539__340.jpg'
  ])
  let [startIndex, setStartIndex] = useState(0);
  let [endIndex, setEndIndex] = useState(null);
  let [isModalOpen, setIsModalOpen] = useState(false);

  const onDrag = (event, startIndex) => {
    setStartIndex(startIndex);
  }

  const onDragOver = (event, endIndex) => {
    setEndIndex(endIndex);
  }

  const onDrop = () => {
    setIsModalOpen(true);
  }

  const pressOk = () => {
    const b = images[startIndex];
    images[startIndex] = images[endIndex];
    images[endIndex] = b;
    setIsModalOpen(false);
  }

  const pressCancel = () => {
    setIsModalOpen(false);
  }

  return (
    <div className="App">
      <h2>Drag and Drop Image</h2>
      {
        isModalOpen &&
        <div className="popup-div">
          <div className='popup-middle-div'>
            <div className="confirm-msg">Do you want to replace Image A for image B ?</div>
            <div className="btn-wrap">
              <div onClick={pressCancel} className="cancel-btn">Cancel</div>
              <div onClick={pressOk} className="ok-btn">Ok</div>
            </div>
          </div>
        </div>
      }
      <div className="image-wrap">
      {
        images.length > 0 && images.map((image,index) =>
          // eslint-disable-next-line no-unused-expressions
          <img src={image}
               alt={index}
               onDrag={() => onDrag(this, index)}
               onDragOver={() => onDragOver(this, index)}
               onDragEnd={() => onDrop()}
               className={endIndex === index ? "image-style drop-image" : "image-style"}
          />
        )
      }
      </div>
    </div>
  );
}

export default App;
