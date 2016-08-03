import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  headers: {
    
  },
  host: 'http://localhost:60101'
});