public with sharing class TagsController {
    
    @AuraEnabled(cacheable=true)   
    public static List<Tag__c> getTags()
    {
        return [
            SELECT Id,Name FROM Tag__c ORDER BY Name
        ];
    }

    @AuraEnabled(cacheable=true)
    public static List<Link__c> getLinksBasedOnTag(String tagId)
    {
        return [
          	SELECT Name, Description__c, URL__c FROM Link__c WHERE Id IN (SELECT Link__c FROM TagAssociation__c WHERE Tag__c= :tagId)  
        ];
    }
    
    @AuraEnabled(cacheable=true)   
    public static List<Tag__c> getTagsFromLinkIds(String[] linkIds)
    {
        return [
            SELECT Id,Name FROM Tag__c WHERE Id IN (SELECT Tag__c FROM TagAssociation__c WHERE Link__c IN :linkIds)
        ];
    }

}