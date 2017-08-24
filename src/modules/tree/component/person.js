import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { addNode, changeFold, setSelect, changeName, clearSelect } from '../actions/index'
import ContentEditable from 'react-contenteditable'

const mapStateToProps = (state, ownProps) => {
  return {
    person: state.family[ownProps.myId],
    selectId: state.selectId
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleNameChange: (event) => {
      dispatch(changeName(ownProps.myId, event.target.value))
      event.nativeEvent.stopImmediatePropagation()
    },
    handleAddClick: (event) => {
      dispatch(addNode(ownProps.myId, '名'))
      event.nativeEvent.stopImmediatePropagation()
    },
    handleFold: (event) => {
      dispatch(changeFold(ownProps.myId))
      event.nativeEvent.stopImmediatePropagation()
    },
    handleSelect: (event) => {
      dispatch(setSelect(ownProps.myId))
      event.nativeEvent.stopImmediatePropagation()
    },
    handleRemoveSelect: (event) => {
      dispatch(clearSelect(ownProps.myId))
      event.stopPropagation()
    },
    renderChild: (childId) => {
      return (
        <ul key={childId}>
          <ConnectedNode myId={childId} />
        </ul>
      )
    }
  }
}

class Person extends Component{
  componentDidMount () {
    if (this.props.myId === 0) {
      document.addEventListener('click', this.props.handleRemoveSelect,false)
    }
  }
  render() {
  const {
    myId,
    handleAddClick, handleFold, handleNameChange, handleSelect, renderChild,
    person : {name, childIds, fold},
    selectId
  } = this.props
    return (
      <li className='tree'>
        {/* <span className='fold'>{fold ? '+' : '-'}</span> */}
        <span className='fold'>{childIds.length > 0 ? childIds.length : null}</span>
        <div className={selectId===myId?'person-node person-node__active':'person-node'} onClick={handleSelect}>
          <ContentEditable
            html={name}
            disabled={false}
            onChange={handleNameChange}
          />
        </div>
        {selectId===myId
          ? <div className='edit-box'>
            <button  onClick={handleAddClick}>+</button>
            {childIds.length > 0
              ? <button onClick={handleFold}>{fold?'展开':'收起'}</button>
              : null
            }
          </div>
          : null
        }
        {fold
          ?null
          :childIds.map(renderChild)
        }
      </li>
    )
  }
}

const ConnectedNode = connect(mapStateToProps, mapDispatchToProps)(Person)

export default ConnectedNode