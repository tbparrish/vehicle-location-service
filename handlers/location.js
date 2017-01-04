add({role:"vehicle-location", cmd:"create"}, function(data) {
  return seneca.make('vehicle-location').data$(data.items[0]).save$();
});

add({role:"vehicle-location", cmd:"list"}, function(data) {
  return seneca.make('vehicle-location').list$();
});

add({role:"vehicle-location", cmd:"retrieve"}, function(data) {
  return seneca.make('vehicle-location').load$(data.id);
});
