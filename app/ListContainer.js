import React from 'react';
import AddItem from './AddItem';
import List from './List';

const ListContainer = React.createClass({
	getInitialState() {
		return {
			list: []
		}
	},
	handleAddItem(newItem) {
		this.setState({
			list: this.state.list.concat([newItem])
		});
	},
	handleRemoveItem(index) {
		var newList = this.state.list;
		newList.splice(index, 1);
		this.setState({
			list: newList
		})
	},
	render() {
		return (
      		<div className="col-sm-6 col-md-offset-3">
        		<div className="col-sm-12">
          			<h3 className="text-center"> Todo List </h3>
          			<AddItem add={this.handleAddItem}/>
          			<List items={this.state.list} remove={this.handleRemoveItem}/>
        		</div>
      		</div>
    )
	}
});

export default ListContainer;