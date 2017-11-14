/**
 * Created by Sahar Zakay.
 */
(function(window) {
    'use strict';

    function getFlickrThumbnails(){
        window.DomService.showLoadingSpinner();
        window.ApiService.getFliclkrPublicThumbnails(function(response) {
            response['authorHandler'] = getAuthorFlickrThumbnails;
            window.DomService.hideLoadingSpinner();
            window.DomService.showPublicFlickrGallery(response);
        });
    }

    function getAuthorFlickrThumbnails(authorId){
        window.DomService.showLoadingSpinner();
        window.DomService.removeAllImgFromGallery();
        window.ApiService.getAuthorFlickrThumbnails(authorId, function(response) {
            window.DomService.hideLoadingSpinner();
            window.DomService.showPublicFlickrGallery(response);
        });
    }

    window.onload = getFlickrThumbnails;
})(window);