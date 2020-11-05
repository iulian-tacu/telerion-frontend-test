import axios from 'axios';
import queryString from 'qs';
import Jsona from "jsona";

const jsonNormalizer = new Jsona();
const queryParams = (resultsLimit) => {
  return {
    'sort': '-created',
    'page': {
      'limit': resultsLimit,
    },
    'fields': {
      'node--project': [
        'title',
        'field_media_image',
        'created',
        'drupal_internal__nid',
      ].join(','),
      'media--image': [
        'field_media_image'
      ].join(','),
      'file--file': [
        'uri'
      ].join(','),
    },
    'include': [
      'field_media_image',
      'field_media_image.field_media_image'
    ].join(',')
  }
};

export const projectsRequest = (projectsSetter, itemsLimit) => {
  axios.get('/jsonapi/node/project?' + queryString.stringify(queryParams(itemsLimit)))
    .then(response => projectsSetter({loaded: true, projects: [...jsonNormalizer.deserialize(response.data)]}))
    .catch(error => console.log(error));
}
