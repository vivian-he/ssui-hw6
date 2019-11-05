import React from 'react'
import classNames from 'classnames/bind';
import ProjectCategory from './ProjectCategory';

/*Style referenced from CodePen by Sean: https://codepen.io/nevernotsean/pen/QodqGj*/
class Collection extends React.Component {

    constructor(props) {
        super(props);

        this._handleClick = this._handleClick.bind(this)
        this.categoryNode = this.categoryNode.bind(this)
        this._focusOff = this._focusOff.bind(this)

        this.state = {
          open: false,
          activeIndex: null,
          categories: []
        }
    }
    componentDidMount() {
      this.setState({
        categories: 
        [
          {
            "thumbnail":"https://images.glaciermedia.ca/polopoly_fs/1.1096291.1401399358!/fileImage/httpImage/image.jpg_gen/derivatives/landscape_804/lord-byng.jpg",          
            "name":"Lord Byng Secondary",
            "des":"This is where I went to highschool. I was in the specialized Arts program called Byng Arts"
          },

          {
            "thumbnail":"https://mikurestaurant.com/wp-content/uploads/2019/07/Miku_FrontPage_1.jpg",
            "name":"Miku Restaurant",
            "des":"This was my favourite restaurant. They make creatively modified Japanese food."
          },

          {
            "thumbnail":"https://i.ytimg.com/vi/_-lwzy3lv1U/maxresdefault.jpg",
            "name":"Dark Table Restaurant",
            "des":"This was a very interesting restaurant where you eat in complete darkness."
          },

          {
            "thumbnail":"https://i.pinimg.com/originals/06/0c/3b/060c3bf69969f1acdb97dd6461972df2.jpg",
            "name":"Kitsilano Beach",
            "des":"This was where I had a bonfire with friends in senior year."
          },

          {
            "thumbnail":"https://www.narcity.com/u/2019/03/05/49dbb64de1c8df4057a54340cfb0fd87e859c910.jpg_1200x630.jpg",
            "name":"Cat Cafe",
            "des":"I love cats. This was the first cat cafe I've ever been to."
          }        
        ]
      })
    }

    _handleClick(i){
      this.setState({
        activeIndex: i,
        open: true
      })
    }
    _focusOff(e){
      e.preventDefault()
      if (e.target.className !== 'category--image') {
        this.setState({
          activeIndex: null,
          open: false
        })
      }
    }
    categoryNode(cat, i){
        let isLast = ( i === this.state.categories.length - 1 || i === this.state.categories.length - 2)
        let shiftLeft = ( i < this.state.activeIndex )

        return (
          <ProjectCategory
            cat={cat}
            key={'cat-' + i}
            handleClick={this._handleClick}
            active={i === this.state.activeIndex}
            focusOff={this._focusOff}
            focused={this.state.open}
            shiftLeft={shiftLeft}
            Index={i}
            isLast={isLast}
          />
        )
    }
    render() {
      let catNodes = this.state.categories.map(this.categoryNode)
      let classes = classNames({
        focused: this.state.open
      })
      return (

        <div className={'categories--menu-container ' + classes} onClick={this._focusOff} style={{height: window.innerHeight}}>
          <ul className="categories menu">
            {catNodes}
          </ul>
        </div>
      )
    }
}

export default Collection