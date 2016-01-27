import Ember from 'ember';
import layout from '../templates/components/lorem-pixel';

export default Ember.Component.extend({
  layout: layout,
  height: 100,
  width: 100,
  category: 'city',
  number: 1,
  src: Ember.computed('height', 'width', {
    get() {
        var base = 'http://lorempixel.com/'
        return `${base}${this.get('width')}/${this.get('height')}/${this.get('category')}/${this.get('number')}`;
    }
  })
});
