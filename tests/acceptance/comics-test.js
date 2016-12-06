import { test } from 'qunit';
import moduleForAcceptance from 'final-project/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | comics');

test('visiting /random shows a random comic ', function(assert) {
  visit('/random');

  andThen(function() {
    assert.equal(currentURL(), '/random', "current url is correct");
    assert.equal(find('.container').length, 2, "the comic is displayed");
    assert.equal(find('.fb-comments').length, 1, "the comic has comments");
  });
});

test('visiting / shows 9 random comics', function(assert) {
  visit('/');
  andThen(function() {
    assert.equal(find('.row').length, 3, "the comics are displayed");
  });
});

test('visiting / and clicking on menu redirects to home', function(assert) {
  visit('/');
  //var links = find('a');
  //var myLink = links.filter('[href="/"]');
  click('[href="/random"]');
  andThen(function() {
    assert.equal(currentURL(), '/random', "Redirects to random correctly");
  });
});
