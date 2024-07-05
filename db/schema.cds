using {
    cuid,
    managed
} from '@sap/cds/common';

context Dsc {
entity Discipline : cuid, managed {
    key ID             : UUID;
        EveID          : String(20);
        EvnDate        : Date;
        Evntime        : Time;
        empname        : String(100);
        empid          : String(20);
        division       : String(100);
        dept           : String(100);
        Issue          : Integer;
        SubIsuue       : Integer;
        Uni            : String(100);
        Mngid          : String(20);
        Mngname        : String(100);
        HRBPLead       : String(100);
        IsGrvFile      : Integer;
        GrvFileNum     : String(100);
        IsFormRespFile : Integer;
        IsAdminOnLeave : Integer;
        AdLvStDate     : Date;
        AdLvEndDate    : Date;
        AdTotalLeave   : String(100);
        DecDesriptn    : String(5000);
        isdraft        : String(1);
        DscComment     : String(5000);
        EveStatus      : Integer;
        DateFileOpen   : Date;
        DateFileClosed : Date;
        AbeyReviewDate : Date;
        IsAbeyance     : String(1);
        AbeyReason     : String(100);


        Sumry          : Composition of many Summary
                             on Sumry.Dsc = $self;
        Inv            : Composition of many Investigation
                             on Inv.Dsc = $self;
        NA             : Composition of many NOA
                             on NA.Dsc = $self;
        ClsOut         : Composition of many CloseOut
                             on ClsOut.Dsc = $self;
        Note           : Composition of many Notes
                             on Note.Dsc = $self;

}

entity Summary : cuid, managed {
    key ID         : UUID;
        ActTaken   : String(100);
        IsAbeyance : String(1);
        AbeyReason : String(100);
        Dsc        : Association to Discipline;
}

entity Investigation : cuid, managed {
    key ID          : UUID;
        IsInvReq    : String(1);
        InvNotes    : String(5000);
        InvTemplate : String(5000);
        Dsc         : Association to Discipline;
}

entity NOA : cuid, managed {
    key ID           : UUID;
        AreAllVal    : String(1);
        Findings     : String(5000);
        FormOut      : String(1);
        Outcome      : String(5000);
        DescOutcome  : String(5000);
        OtherOutcome : String(5000);
        occupation   : String(100);
        exp          : String(20);
        association  : String(50);
        shift        : String(10);
        Dsc          : Association to Discipline;
        Aggr         : Composition of many AggrMiti
                           on Aggr.Amiti = $self;
}

entity AggrMiti : cuid, managed {

    key ID             : UUID;
        AggrType       : Integer;
        LongServEmp    : String(5000);
        PrevGoodRecEmp : String(5000);
        Provocation    : String(5000);
        MandFlareUp    : String(5000);
        RuleofConduct  : String(5000);
        MisRules       : String(5000);
        Amiti          : Association to NOA;

}

entity CloseOut : cuid, managed {
    key ID            : UUID;
        ClOutCmt      : String(5000);
        CloseTemplate : String(5000);
        Dsc           : Association to Discipline;
}


entity Notes : cuid, managed {
    key ID     : UUID;
        Notes  : String(5000);
        Dsc    : Association to Discipline;
        NtHist : Composition of many NotesHist
                     on NtHist.hist = $self;

}

entity NotesHist : cuid, managed {
    key ID    : UUID;
        Notes : String(5000);
        hist  : Association to Notes;


}
entity MasterData : managed {
    key ID   : Integer;
        mid  : Integer;
        text : String(5000);
        type : String(100);
        SubType:String(100);
}

}