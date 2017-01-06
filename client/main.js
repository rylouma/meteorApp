import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './main.html';
import './main.css';


var tab_spells = Array("Lumos","Nox", "Crache-Limace", "Avada Kedavra", "Rictusempra", "Wingardium Leviosa", "Accio", "Alohomora", "Expelliarmus", "Incendio", "Petrificus Totalus", "Riddikulus", "Serpensortia");
var sorted_spell = tab_spells[Math.floor(Math.random()*tab_spells.length)];

Template.gryffondor.events({
    'click .add_eleve': function (event, template)
    {
        var new_eleve = template.find(".nom_eleve").value;
        eleves_gryffondor.insert({ name : new_eleve});
        template.find(".nom_eleve").value = "";
    },
    'click .delete_eleve': function (event, template)
    {
         eleves_gryffondor.remove({_id: this._id});
    },

    'click .spell' : function (event, template)
    {
      sorts.insert({spell : sorted_spell});
      template.find(".spell").style.display="none";
    }
});


/**************************************/
Template.poufsouffle.events({
    'click .add_eleve': function (event, template)
    {
        var new_eleve = template.find(".nom_eleve").value;
        eleves_poufsouffle.insert({ name : new_eleve});
        template.find(".nom_eleve").value = "";
    },
    'click .delete_eleve': function (event, template)
    {
         eleves_poufsouffle.remove({_id: this._id})
    }
});

/**************************************/
Template.serdaigle.events({
    'click .add_eleve': function (event, template)
    {
        var new_eleve = template.find(".nom_eleve").value;
        eleves_serdaigle.insert({ name : new_eleve});
        template.find(".nom_eleve").value = "";
    },
    'click .delete_eleve': function (event, template)
    {
         eleves_serdaigle.remove({_id: this._id})
    }
});

/**************************************/
Template.serpentard.events({
    'click .add_eleve': function (event, template)
    {
        var new_eleve = template.find(".nom_eleve").value;
        eleves_serpentard.insert({ name : new_eleve});
        template.find(".nom_eleve").value = "";
    },
    'click .delete_eleve': function (event, template)
    {
         eleves_serpentard.remove({_id: this._id})
    }
});


Template.gryffondor.helpers({
    toutlemonde: function ()
    {
        return eleves_gryffondor.find();
    },

    sortilege: function()
    {
        return sorts.find({});
    }
});

Template.poufsouffle.helpers({
    toutlemonde: function ()
    {
        return eleves_poufsouffle.find();
    }
});

Template.serdaigle.helpers({
    toutlemonde: function ()
    {
        return eleves_serdaigle.find();
    }
});

Template.serpentard.helpers({
    toutlemonde: function ()
    {
        return eleves_serpentard.find();
    }
});
