import React, { useState, useEffect } from 'react';
import './search.css';
import axios from 'axios';
import { Form, FormControl, Button } from 'react-bootstrap';
import Masonry from 'react-responsive-masonry';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function Search() {
  const [photo, setPhoto] = useState('');
  const [clientid, setClientid] = useState(
    'AHZ8qUDbebRPI4fubsR9H1a409oMm60Igh6VppP7T84'
  );
  const [page, setPage] = useState('1');

  const [images, setImages] = useState([]);

  useEffect(() => {
    const url =
      'https://api.unsplash.com/search/photos?page=' +
      page +
      '&query=' +
      photo +
      '&client_id=' +
      clientid;
    axios.get(url).then(resp => {
      setImages([...images, ...resp.data.results]);
    });
  }, [images]);

  function changefun(event) {
    setPhoto(event.target.value);
  }
  function searchfun(event) {
    event.preventDefault();
    const url =
      'https://api.unsplash.com/search/photos?page=' +
      page +
      '&query=' +
      photo +
      '&client_id=' +
      clientid;
    axios.get(url).then(resp => {
      setImages(resp.data.results);
    });
  }
  function showMore(event) {
    setPage(page + 1);
  }
  return (
    <>
      <Form className='form-data'>
        <Form.Row className='align-items-center search-form'>
          <FormControl
            onChange={changefun}
            type='text'
            name='photo'
            placeholder='Search for Photos'
            className='input-bar'
          />

          <Button
            onClick={searchfun}
            className='search-btn'
            variant='dark'
            type='submit'
          >
            Search
          </Button>
        </Form.Row>
        <br />

        <h2>{photo}</h2>
        <br />
        <div className='image-load'>
          <Masonry className=' image-grid' options={{ isFitWidth: true }}>
            {images.map(photo => {
              return (
                <li className='card-image'>
                  <img src={photo.urls.small} width='385' />
                </li>
              );
            })}
          </Masonry>
          <Button
            onClick={showMore}
            className='load-btn'
            variant='dark'
            type='submit'
          >
            Load More
          </Button>
        </div>
      </Form>
    </>
  );
}
{
  /* </Col> */
}
