import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    // TODO: Ember Data support
    return this.store.findAll('contact');
  }
});
