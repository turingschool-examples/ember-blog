import Ember from 'ember';

export default Ember.Component.extend({

  actions: {

    likePost: function () {
      this.get('post').incrementProperty('likes').save();
    },

    highlight: function () {
      this.$().toggleClass('highlight');
    }

  }

});
