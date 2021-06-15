import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Searchbar.module.css";

class Searchbar extends Component {
  static propTypes = {
    searchProducts: PropTypes.func.isRequired,
  };

  state = {
    search: "",
  };

  handleChange = (evt) => {
    this.setState({ search: evt.target.value });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.searchProducts(this.state.search);
  };
  render() {
    const { search } = this.state;
    return (
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={styles.SearchFormButton}>
            <span className={styles.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={styles.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={search}
            name="search"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
