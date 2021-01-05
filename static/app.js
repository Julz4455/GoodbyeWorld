AFRAME.registerComponent('expanded-hand-controls', {
  schema: {
    color: {type: 'color', default: '#bbbbbb'},
    hand: {type: 'string', default: 'left'}
  },

  init: function() {
    // Low-level setup
    this.el.setAttribute('raycaster', 'enabled: false; showLine: false;')
    this.el.setAttribute('hand-controls', `hand: ${this.data.hand}; handModelStyle: highPoly; color: ${this.data.color};`)

    // Events setup
    this.el.addEventListener('pistolstart', function() {
      // Enable raycasting
      this.setAttribute('raycaster', 'enabled: true; showLine: true;')
    })

    this.el.addEventListener('pistolend', function() {
      // Disable raycasting
      this.setAttribute('raycaster', 'enabled: false; showLine: false;')
    })
  }
})

AFRAME.registerComponent('eater-sphere', {
  schema: {},

  init: function() {
    this.el.setAttribute('color', '#ff3503')

    this.el.addEventListener('animationcomplete', function() {
      console.log(this.detail.name.split('__')[this.detail.name.split('__').length-1])
    })
  }
})
