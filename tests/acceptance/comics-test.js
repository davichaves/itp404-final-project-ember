import { test } from 'qunit';
import moduleForAcceptance from 'final-project/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | comics');

test('visiting / shows 9 random comics', function(assert) {
  visit('/');
  andThen(function() {
    assert.equal(currentURL(), '/', "Redirects to home correctly");
    assert.equal(find('.row').length, 3, "the comics are displayed");
  });
});

test('visiting /random shows a random comic ', function(assert) {
  visit('/random');
  andThen(function() {
    assert.equal(currentURL(), '/random', "current url is correct");
    assert.equal(find('.fb-comments').length, 1, "the comic has comments");
  });
});

test('visiting /about shows about page', function(assert) {
  visit('/about');
  andThen(function() {
    assert.equal(currentURL(), '/about', "Redirects to about correctly");
    assert.equal(find('.container').length, 2, "the about is displayed");
  });
});
