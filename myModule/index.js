module.exports = function(content, map, meta) {
  console.log('##### My Module #####');
  console.log('content: ', content);
  console.log('map: ', map);
  console.log('meta: ', meta);
  console.log('');
  
  return '';
};

module.exports.pitch = function(remainingRequest, precedingRequest, data) {
  console.log('#### My Module Pitch');
  console.log('remainingRequest: ', remainingRequest);
  console.log('precedingRequest: ', precedingRequest);
  console.log('data: ', data);
  console.log('');
  
  return JSON.stringify(remainingRequest)
};