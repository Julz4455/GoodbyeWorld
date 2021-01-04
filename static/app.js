AFRAME.registerComponent('expanded-hand-controls', {
  schema: {
    color: {type: 'color', default: '#bbb'},
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
