using {Dsc as my} from '../db/schema';

service Manager @(path: '/browse') {
    entity Discipline    as projection on my.Discipline;
    entity Summary       as projection on my.Summary;
    entity Investigation as projection on my.Investigation;
    entity NOA           as projection on my.NOA;
    entity AggrMiti      as projection on my.AggrMiti;
    entity CloseOut      as projection on my.CloseOut;
    entity Notes         as projection on my.Notes;
    entity NotesHist     as projection on my.NotesHist;
     entity MasterData   as projection on my.MasterData;

}
