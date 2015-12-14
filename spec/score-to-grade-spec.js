describe('score_spec', function() {



  it('获得的grade', function() {
    var collection_a = 100;
    var result = score(collection_a);
    expect(result).toEqual('S');
  });



  it('获得的grade', function() {
    var collection_b = 85;
    var result = score(collection_b);
    expect(result).toEqual('A');
  });



  it('获得的grade', function() {
    var collection_c = 56;
    var result = score(collection_c);
    expect(result).toEqual('D');
  });

it('获得的grade', function() {
    var collection_c = -1;
    var result = score(collection_c);
    expect(result).toEqual('101');
  });


});
