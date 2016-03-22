

$(document).ready( function() {
  $.getJSON("out-report.json", function(json) {

    var variants = [];
    for (var x in json.variants) {
      var ele = json.variants[x];
      variants.push({
        "acc_url": ele.acc_url,
        "alt_allele": ele.alt_allele,
        "allele_freq": ele.allele_freq,
        "zygosity": ele.zygosity,
        "name": ele.name,
        "clinical_significance": ele.clinical_significance,
        "ref_allele": ele.ref_allele,
        "chrom": ele.chrom,
        "pos": ele.pos,
        "html_link_name" : "<a href='" + ele.acc_url + "'>" + ele.name + "</a>"
      });
    }

    var $table = $('table');
    $(function() {
      $table.bootstrapTable({data: variants});
    });

    return;

  });

});
