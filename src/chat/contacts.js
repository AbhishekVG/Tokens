import React, { Component } from "react";
import { connect } from 'react-redux';
import { View, FlatList, ActivityIndicator, Image } from "react-native";
import { List, ListItem, SearchBar } from "react-native-elements"; // 0.19.0
import { fetchContacts } from '../actions/contactsFetchAction';

const img = require('../img/luffy.jpg');
console.log("--->img",img)
class ContactsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: [],
      page: 1,
      seed: 1,
      error: null,
      refreshing: false,
    };
  }

  componentDidMount() {
    // this.makeRemoteRequest();
    this.props.fetchContacts()
  }

  makeRemoteRequest = () => {

    // const { page, seed } = this.state;
    // const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
    // this.setState({ loading: true });

    // fetch(url)
    //   .then(res => res.json())
    //   .then(res => {
    //     this.setState({
    //       data: page === 1 ? res.results : [...this.state.data, ...res.results],
    //       error: res.error || null,
    //       loading: false,
    //       refreshing: false
    //     });
    //   })
    //   .catch(error => {
    //     this.setState({ error, loading: false });
    //   });
  };

  // handleRefresh = () => {
  //   this.setState(
  //     {
  //       page: 1,
  //       seed: this.state.seed + 1,
  //       refreshing: true
  //     },
  //     () => {
  //       this.makeRemoteRequest();
  //     }
  //   );
  // };

  // handleLoadMore = () => {
  //   this.setState(
  //     {
  //       page: this.state.page + 1
  //     },
  //     () => {
  //       this.makeRemoteRequest();
  //     }
  //   );
  // };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%"
        }}
      />
    );
  };

  renderHeader = () => {
    return <SearchBar placeholder="Type Here..." lightTheme round />;
  };

  renderFooter = () => {
    if (!this.state.loading) return null;

    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE"
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

  render() {
    console.log("PIKAAAAAAAAAAAAa", this.props, this.props.loader)
    return (
      this.props.loader ?
      (<ActivityIndicator animating size="large" />)
      :
      (
        <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
          <FlatList
            data={this.props.usersList}
            renderItem={({ item }) => (
              <ListItem
                roundAvatar
                title={item.givenName || item.prefix || item.middleName || item.lastName || item.suffix}
                subtitle={item.tokenNumber}
                avatar={{source : img}}
                containerStyle={{ borderBottomWidth: 0 }}
                onPress = {(x) => {console.log('x',x)}}
              />
            )}
            keyExtractor={item => item.tokenNumber}
            ItemSeparatorComponent={this.renderSeparator}
            // ListHeaderComponent={this.renderHeader}
            // ListFooterComponent={this.renderFooter}
            // onRefresh={this.handleRefresh}
            // refreshing={this.state.refreshing}
            // onEndReached={this.handleLoadMore}
            // onEndReachedThreshold={50}
          />
                        <Image
                            source={img}
                            style={{
                                width: 150,
                                height: 150,
                                resizeMode: 'contain'
                            }}
                        />
        </List>
      )
  )
  }
}

const mapStateToProps = ({ userContactsList }) => {
  const { loader, usersList } = userContactsList;
  return {
    loader,
    usersList
  }
}

export default connect(mapStateToProps, { fetchContacts })(ContactsList);
