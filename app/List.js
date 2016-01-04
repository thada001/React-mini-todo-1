import React from 'react';

const List = React.createClass({
	render() {
		var styles = {
  			uList: {
    			paddingLeft: 0,
    			listStyleType: "none",
    			color: "white",
  			},
	  		listGroup: {
	    		margin: '5px 0',
	    		borderRadius: 5,
	    		backgroundColor: 'rgb(0, 150, 200)'
	  		},
	  		removeItem: {
	    		fontSize: 20,
	    		float: "left",
	    		position: "absolute",
	    		top: 12,
	    		left: 6,
	    		cursor: "pointer",
	    		color: "rgb(222, 79, 79)"
	  		},
	  		todoItem: {
	    		paddingLeft: 20,
	    		fontSize: 17,
	  		}
		};
		var listItems = this.props.items.map(function(item, index) {
			return (
				<li key={index} className='list-group-item' style={styles.listGroup}>
					<span 
					className='glyphicon glyphicon-remove'
					style={styles.removeItem}
					onClick={this.props.remove.bind(null, index)}>
					</span>
					<span style={styles.todoItem}>
		            	{item}
		            </span>
				</li>
			)
		}.bind(this));
		return (
      		<ul style={styles.uList}>
        		{listItems}
      		</ul>
    	)
	}
});

export default List;