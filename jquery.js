$(function()
{
    var staticURLP = 'https://raw.githubusercontent.com/nelsondalida/data/master/province.json';
    var provArr=[];
    $.getJSON(staticURLP,function(data)
    {
        $.each(data,function(index,val)
        {
            provArr[index] = val;
        });
    });

    $('#DDregion').change(function(event)
    {
        $region=$(this).val();
        var $x = $region;
        $htmlOption='<option value="0">Choose Your Province</option>';
        var out = $htmlOption;
        var i;
        for (i = 0; i < provArr.length; i++)
        {
            if(provArr[i].regCode == $x)
            {
                    out+="<option value='"
                    +provArr[i].provCode+
                    "'>"
                    +provArr[i].provDesc+
                    "</option>";
                     console.log(provArr[i].provDesc);
            }
        }
        $('#DDprovince').html(out);
    });
});
$(function()
{
    var staticURLC = 'https://raw.githubusercontent.com/nelsondalida/data/master/city.json';
    var cityArr=[];
    $.getJSON(staticURLC,function(data)
    {
        $.each(data,function(index,val)
        {
            cityArr[index] = val;
        });
    });

    $('#DDprovince').change(function(event)
    {
        $province=$(this).val();
        var $y = $province;
        $htmlOption='<option value="0">Choose Your City/Municipality</option>';
        var out = $htmlOption;
        var i;
        for (i = 0; i < cityArr.length; i++)
        {
            if(cityArr[i].provCode == $y)
            {
                    out+="<option value='"
                    +cityArr[i].citymunCode+
                    "'>"
                    +cityArr[i].citymunDesc+
                    "</option>";
                     console.log(cityArr[i].cityDesc);
            }
        }
        $('#DDcity').html(out);
    });   
});
$(function()
{
    var staticURLB = 'https://raw.githubusercontent.com/nelsondalida/data/master/brgy.json';
    var brgyArr=[];
    $.getJSON(staticURLB,function(data)
    {
        $.each(data,function(index,val)
        {
            brgyArr[index] = val;
        });
    });

    $('#DDcity').change(function(event)
    {
        $province=$(this).val();
        var $z = $province;
        $htmlOption='<option value="0">Choose Your Barangay</option>';
        var out = $htmlOption;
        var i;
        for (i = 0; i < brgyArr.length; i++)
        {
            if(brgyArr[i].citymunCode == $z)
            {
                    out+="<option value='"
                    +brgyArr[i].brgyCode+
                    "'>"
                    +brgyArr[i].brgyDesc+
                    "</option>";
                     console.log(brgyArr[i].cityDesc);
            }
        }
        $('#DDbrgy').html(out);
    });
});
