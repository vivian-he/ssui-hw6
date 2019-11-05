import React from 'react'
import classNames from 'classnames/bind';

/*Style referenced from CodePen by Sean: https://codepen.io/nevernotsean/pen/QodqGj*/
class ProjectCategory extends React.Component {
    constructor(props) {
        super(props)

        this.setActive = this.setActive.bind(this)

        this.state = {
          projects: []
        }
    }

    setActive() {
        this.props.handleClick(this.props.Index)
    }
    getWidth(isActive) {
        let w = !isActive ? 'calc(20vw - 20px)' : '800px'
        return w
    }
    render() {
        let { active, focused, shiftLeft, isLast } = this.props

        let styles = {
          container: { 
            transform: (function() {
                return active
                    ? 'scale(1.1) translate3d(0, 0, 0)'
                    : 'scale(1) translate3d(0, 0, 0)'
            })()
          }, item: {
              transform: (function() {
                  let direction = (shiftLeft) ? '-': ''
                  let transform = (focused && !active) ? 'translate3d('+ direction +'100%, 0, 0)' : 'translate3d(0, 0, 0)'
                  return transform
              })()
          }, background: {
              background: 'url(' + this.props.cat.thumbnail + ') no-repeat center center',
              backgroundSize: 'cover',
              height: '500px',
              width: (this.getWidth(active))
          }
        }
        let classes = classNames({category: true, isActive: active, isLast, shiftLeft})
        return (

            <li className={classes} style={styles.item}>
                <div className="category--content">
                    <h2>{this.props.cat.name}</h2>
                    <h6>{this.props.cat.des}</h6>
                    
                </div>
                <div className="category--image-container" onClick={this.setActive} style={styles.container}>
                    <div className="category--image" style={styles.background}></div>
                </div>
                <div className="category--name">
                  <h6>{this.props.cat.name}</h6>
                  
                </div>
                
            </li>

        )
    }
}


export default ProjectCategory
