import React, { Component } from "react";
import axios from "axios";
import styles from "./App.module.css";
import Searchbar from "./components/searchbar/Searchbar";
import ImageGallery from "./components/imageGallery/ImageGallery";
import Loader from "./components/loader/Loader";
import Button from "./components/button/Button";
import Modal from "./components/modal/Modal";

class App extends Component {
  state = {
    hits: [],
    error: null,
    loading: false,
    search: "",
    page: 1,
    isModalOpen: false,
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.search !== this.state.search ||
      prevState.page !== this.state.page
    ) {
      this.handleSearchProducts();
    }
  }

  openModal = (modalImage) => {
    this.setState({ isModalOpen: true, modalImage });
  };

  closeModal = (evt) => {
    if (evt.target === evt.currentTarget || evt.key === "Escape")
      this.setState({ isModalOpen: false });
  };

  handleSearchProducts = async () => {
    const KEY = "21692552-54f62550fb359a7cc9e1694fc";
    const { page, search } = this.state;
    this.setState({ loading: true });
    try {
      const { data } = await axios.get(
        `https://pixabay.com/api/?q=${search}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12
`
      );

      this.setState((prevState) => ({
        hits: [...prevState.hits, ...data.hits],
      }));
    } catch (error) {
      this.setState({ error: error.response.hits });
    } finally {
      this.setState({ loading: false });
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  handleSubmit = (search) => {
    this.setState({ search, hits: [], page: 1 });
  };

  showMore = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }));
  };
  getSnapshotBeforeUpdate;

  render() {
    const { hits, loading, isModalOpen, modalImage } = this.state;
    return (
      <div className={styles.App}>
        <Searchbar searchProducts={this.handleSubmit} />
        {loading && <Loader />}
        <ImageGallery hits={hits} openModal={this.openModal} />
        {!!hits.length && <Button showMore={this.showMore} />}
        {isModalOpen && (
          <Modal modalImage={modalImage} closeModal={this.closeModal} />
        )}
      </div>
    );
  }
}

export default App;
