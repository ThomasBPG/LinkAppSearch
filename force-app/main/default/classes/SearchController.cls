public with sharing class SearchController {
    @AuraEnabled(cacheable=true)
    public static List<Link__c> doSearch(String queryText) {
        String key = '%' + queryText + '%';
        return [
            SELECT Id, Description__c, URL__c, Name
            FROM
                Link__c
            WHERE
                Name LIKE :key
                OR
                Description__c LIKE :key
        ];
    }
}