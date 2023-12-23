export const deleteImgFromState= (i, setImages, setImgShow) => {
    setImages(prevState => {
      const newState = [...prevState]
      newState[i] = null;
      return newState;
    });
    setImgShow(prevState => {
      const newState = [...prevState]
      newState[i] = null;
      return newState;
    })
  }

  export const deleteImgFromStateAndServer= (i, setImages, setImgShow, setImgDelete, el) => {
    setImages(prevState => {
      const newState = [...prevState]
      newState[i] = null;
      return newState;
    });
    setImgShow(prevState => {
      const newState = [...prevState]
      newState[i] = null;
      return newState;
    });
    setImgDelete(prevState => {
      const newState = [...prevState]
      newState[i] = el.url;
      return newState;
    })
  }

  export const handleImageChange = (e, i, setImgShow, images, setImages) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImgShow(prevState => {
          const newState = [...prevState]
          newState[i] = reader.result;
          return newState;
        });
      };
      reader.readAsDataURL(file);
    }

    if (images.length <= 5) {
      setImages(prevState => {
        const newState = [...prevState]
        newState[i] = file;
        return newState;
      });
    } else {
      alert('Можно загрузить не более пяти изображений.');
    }

  };