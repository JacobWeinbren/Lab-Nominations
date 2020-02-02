function hasNumber(string) {
    return /\d/.test(string);
}

state = 'leader'

colours = {
    'nandy': '#A569BD',
    'starmer': '#EB984E',
    'bailey': '#45B39D',
    'thornberry': '#5DADE2',
    'other': 'grey',
    'none': '#CD6155',
    'smith': '#CD55B9',
    'corbyn': '#52BE80',
    'phillips': '#F4D03F',
    'lewis': '#5499C7',
    'rayner': '#A9CCE3',
    'butler': '#ABEBC6',
    'khan': '#D2B4DE',
    'murray': '#F9E79F',
    'burgon': '#EDBB99'
}

function leader_run(data) {

    $('.item').css('visibility', 'hidden')
    $('.item').css('position', 'absolute')
    $('.leader').css('visibility', 'visible')
    $('.leader').css('position', 'relative')

    count = {
        'nandy': 0,
        'bailey': 0,
        'starmer': 0,
        'thornberry': 0,
        'none-a': 0,
    }

    for (item in data) {
        current = data[item]['2020 Leader']
        if (current == 'Lisa Nandy') {
            count['nandy'] += 1
            $('path[title="' + data[item]['Constituency Name'] + '"]', svg).css('fill', colours['nandy'])
        }
        if (current == 'Emily Thornberry') {
            count['thornberry'] += 1
            $('path[title="' + data[item]['Constituency Name'] + '"]', svg).css('fill', colours['thornberry'])
        }
        if (current == 'Rebecca Long-Bailey') {
            count['bailey'] += 1
            $('path[title="' + data[item]['Constituency Name'] + '"]', svg).css('fill', colours['bailey'])
        }
        if (current == 'Keir Starmer') {
            count['starmer'] += 1
            $('path[title="' + data[item]['Constituency Name'] + '"]', svg).css('fill', colours['starmer'])
        }
        if (current == 'None') {
            count['none-a'] += 1
            $('path[title="' + data[item]['Constituency Name'] + '"]', svg).css('fill', colours['none'])
        }
        if (!leader) {
            $('path[title="' + data[item]['Constituency Name'] + '"]', svg).css('fill', 'white')
        }

        results = [
            ['nandy', data[item]['Nandy Vote'].trim().replace("", 0)],
            ['bailey', data[item]['Long-Bailey Vote'].trim().replace("", 0)],
            ['starmer', data[item]['Starmer Vote'].trim().replace("", 0)],
            ['thornberry', data[item]['Thornberry Vote'].trim().replace("", 0)],
            ['other', data[item]['Other Vote (Leader)'].trim().replace("", 0)]
        ].sort((a, b) => {
            return b[1] - a[1]
        })
        $('path[title="' + data[item]['Constituency Name'] + '"]', svg).data('results', results)
    }

    frequency(count)
}

function deputy_run(data) {

    $('.item').css('visibility', 'hidden')
    $('.item').css('position', 'absolute')
    $('.deputy').css('visibility', 'visible')
    $('.deputy').css('position', 'relative')

    count = {
        'khan': 0,
        'burgon': 0,
        'murray': 0,
        'butler': 0,
        'rayner': 0,
        'none-b': 0
    }

    for (item in data) {
        deputy = data[item]['2020 Deputy']
        if (deputy == 'Angela Rayner') {
            count['rayner'] += 1
            $('path[title="' + data[item]['Constituency Name'] + '"]', svg).css('fill', colours['rayner'])
        }
        if (deputy == 'Rosena Allin-Khan') {
            count['khan'] += 1
            $('path[title="' + data[item]['Constituency Name'] + '"]', svg).css('fill', colours['khan'])
        }
        if (deputy == 'Richard Burgon') {
            count['burgon'] += 1
            $('path[title="' + data[item]['Constituency Name'] + '"]', svg).css('fill', colours['burgon'])
        }
        if (deputy == 'Dawn Butler') {
            count['butler'] += 1
            $('path[title="' + data[item]['Constituency Name'] + '"]', svg).css('fill', colours['butler'])
        }
        if (deputy == 'Ian Murray') {
            count['murray'] += 1
            $('path[title="' + data[item]['Constituency Name'] + '"]', svg).css('fill', colours['murray'])
        }
        if (deputy == 'None') {
            count['none-b'] += 1
            $('path[title="' + data[item]['Constituency Name'] + '"]', svg).css('fill', colours['none'])
        }
        if (!deputy) {
            $('path[title="' + data[item]['Constituency Name'] + '"]', svg).css('fill', 'white')
        }

        results = [
            ['khan', data[item]['Allin-Khan Vote'].trim().replace("", 0)],
            ['butler', data[item]['Butler Vote'].trim().replace("", 0)],
            ['rayner', data[item]['Rayner Vote'].trim().replace("", 0)],
            ['burgon', data[item]['Burgon Vote'].trim().replace("", 0)],
            ['murray', data[item]['Murray Vote'].trim().replace("", 0)],
            ['other', data[item]['Other Vote (Deputy)'].trim().replace("", 0)]
        ].sort((a, b) => {
            return b[1] - a[1]
        })
        $('path[title="' + data[item]['Constituency Name'] + '"]', svg).data('results', results)
    }

    frequency(count)
}

function frequency(count) {
    for (name in count) {
        document.querySelector('#' + name).getSVGDocument().getElementById("number").innerHTML = count[name];
    }

    for (name in count) {
        $('.' + name).html(count[name]);
    }
}

function render(data) {

    data_var = data;

    $('#leader').addClass('active')

    $('#leader').click(function(event) {
        state = 'leader';
        $('#deputy').removeClass('active')
        $(this).addClass('active')
        $('.constituency', svg).css('fill', 'white');

        if (window.safari !== undefined) {
            setTimeout(
                function() {
                    leader_run(data)
                }, 300);
        } else {
            leader_run(data)
        }
    });

    $('#deputy').click(function(event) {
        state = 'deputy';
        $('#leader').removeClass('active')
        $(this).addClass('active')
        $('.constituency', svg).css('fill', 'white');

        if (window.safari !== undefined) {
            setTimeout(
                function() {
                    deputy_run(data)
                }, 300);
        } else {
            deputy_run(data)
        }
    });


    $(window).resize(function() {
        if (object) {
            object.resize();
            object.fit();
            object.center();
        }
    });

    //Add in Meta Data
    for (item in data) {
        $('path[title="' + data[item]['Constituency Name'] + '"]', svg).attr('old', data[item]['2016 Nomination'])
        $('path[title="' + data[item]['Constituency Name'] + '"]', svg).attr('current', data[item]['2020 Leader'])
        $('path[title="' + data[item]['Constituency Name'] + '"]', svg).attr('dep', data[item]['2020 Deputy'])
        $('path[title="' + data[item]['Constituency Name'] + '"]', svg).attr('rep', data[item]['MP/MSP'])
        $('path[title="' + data[item]['Constituency Name'] + '"]', svg).attr('vote', data[item]['Seat Elected Party (2016/2019)'])
        $('path[title="' + data[item]['Constituency Name'] + '"]', svg).attr('region', data[item]['Region'])
        $('path[title="' + data[item]['Constituency Name'] + '"]', svg).attr('mp', data[item]['MP Nomination'])
    }

    leader_run(data)

    $('#loading').remove();

    $('path', svg).each(function() {
        if ($(this).attr('id') && !hasNumber($(this).attr('id'))) {

            $(this).addClass('constituency');

            $(this).on('click mouseover touchstart', function() {

                $('#title').text($(this).attr('title'));
                $('.constituency', svg).css('fill-opacity', 1);
                $(this).css('fill-opacity', 0.6);

                //2016 Nom
                old = $(this).attr('old')
                if (old && old.length > 0) {
                    if (old == "None") {
                        $($('.status')[0]).html('CLP Nominated <b style="color:' + colours['none'] + '">Nobody</b> in 2016');
                    }
                    if (old == "Jeremy Corbyn") {
                        $($('.status')[0]).html('CLP Nominated <b style="color:' + colours['corbyn'] + '">Jeremy Corbyn</b> in 2016');
                    }
                    if (old == "Owen Smith") {
                        $($('.status')[0]).html('CLP Nominated <b style="color:' + colours['smith'] + '">Owen Smith</b> in 2016');
                    }
                } else {
                    $($('.status')[0]).html("CLP Didn't Nominate in 2016");
                }

                //2020 Leader
                current = $(this).attr('current');

                if (current && current.length > 0) {
                    if (current == "None") {
                        $($('.status')[1]).html('CLP Nominated <b style="color:' + colours['none'] + '">Nobody</b> in 2020');
                        if (state == 'leader') {
                            $("#info_hex", icon).css("fill", colours['none']);
                        }
                    }
                    if (current == "Lisa Nandy") {
                        $($('.status')[1]).html('CLP Nominated <b style="color:' + colours['nandy'] + '">Lisa Nandy</b> in 2020');
                        if (state == 'leader') {
                            $("#info_hex", icon).css("fill", colours['nandy']);
                        }
                    }
                    if (current == "Emily Thornberry") {
                        $($('.status')[1]).html('CLP Nominated <b style="color:' + colours['thornberry'] + '">Emily Thornberry</b> in 2020');
                        if (state == 'leader') {
                            $("#info_hex", icon).css("fill", colours['thornberry']);
                        }
                    }
                    if (current == "Rebecca Long-Bailey") {
                        $($('.status')[1]).html('CLP Nominated <b style="color:' + colours['bailey'] + '">Rebecca Long-Bailey</b> in 2020');
                        if (state == 'leader') {
                            $("#info_hex", icon).css("fill", colours['bailey']);
                        }
                    }
                    if (current == "Keir Starmer") {
                        $($('.status')[1]).html('CLP Nominated <b style="color:' + colours['starmer'] + '">Keir Starmer</b> in 2020');
                        if (state == 'leader') {
                            $("#info_hex", icon).css("fill", colours['starmer']);
                        }
                    }
                } else {
                    $($('.status')[1]).html("CLP Hasn't Nominated Leader Yet");
                    if (state == 'leader') {
                        $("#info_hex", icon).css("fill", 'white');
                    }
                }

                //2020 Deputy
                deputy = $(this).attr('dep');

                if (deputy && deputy.length > 0) {
                    if (deputy == "Angela Rayner") {
                        $($('.status')[2]).html('CLP Nominated <b style="color:' + colours['rayner'] + '">Angela Rayner</b> in 2020');
                        if (state == 'deputy') {
                            $("#info_hex", icon).css("fill", colours['rayner']);
                        }
                    }
                    if (deputy == "Dawn Butler") {
                        $($('.status')[2]).html('CLP Nominated <b style="color:' + colours['butler'] + '">Dawn Butler</b> in 2020');
                        if (state == 'deputy') {
                            $("#info_hex", icon).css("fill", colours['butler']);
                        }
                    }
                    if (deputy == "Richard Burgon") {
                        $($('.status')[2]).html('CLP Nominated <b style="color:' + colours['burgon'] + '">Richard Burgon</b> in 2020');
                        if (state == 'deputy') {
                            $("#info_hex", icon).css("fill", colours['burgon']);
                        }
                    }
                    if (deputy == "Ian Murray") {
                        $($('.status')[2]).html('CLP Nominated <b style="color:' + colours['murray'] + '">Ian Murray</b> in 2020');
                        if (state == 'deputy') {
                            $("#info_hex", icon).css("fill", colours['murray']);
                        }
                    }
                    if (deputy == "Rosena Allin-Khan") {
                        $($('.status')[2]).html('CLP Nominated <b style="color:' + colours['khan'] + '">Rosena Allin-Khan</b> in 2020');
                        if (state == 'deputy') {
                            $("#info_hex", icon).css("fill", colours['khan']);
                        }
                    }
                } else {
                    $($('.status')[2]).html("CLP Hasn't Nominated Deputy Yet");
                    if (state == 'deputy') {
                        $("#info_hex", icon).css("fill", 'white');
                    }
                }

                //MP Nom
                mp = $(this).attr('mp');
                vote = $(this).attr('vote');
                region = $(this).attr('region');

                if (vote == "Lab") {
                    if (mp && mp.length > 0) {
                        if (mp == "None") {
                            $($('.status')[3]).html('MP Nominated <b style="color:' + colours['none'] + '">Nobody</b>');
                        }
                        if (mp == "Lisa Nandy") {
                            $($('.status')[3]).html('MP Nominated <b style="color:' + colours['nandy'] + '">Lisa Nandy</b>');
                        }
                        if (mp == "Emily Thornberry") {
                            $($('.status')[3]).html('MP Nominated <b style="color:' + colours['thornberry'] + '">Emily Thornberry</b>');
                        }
                        if (mp == "Rebecca Long-Bailey") {
                            $($('.status')[3]).html('MP Nominated <b style="color:' + colours['bailey'] + '">Rebecca Long-Bailey</b>');
                        }
                        if (mp == "Keir Starmer") {
                            $($('.status')[3]).html('MP Nominated <b style="color:' + colours['starmer'] + '">Keir Starmer</b>');
                        }
                        if (mp == "Jess Phillips") {
                            $($('.status')[3]).html('MP Nominated <b style="color:' + colours['phillips'] + '">Jess Phillips</b>');
                        }
                        if (mp == "Clive Lewis") {
                            $($('.status')[3]).html('MP Nominated <b style="color:' + colours['lewis'] + '">Clive Lewis</b>');
                        }
                    } else {
                        $($('.status')[3]).html('MP Nominated <b style="color:#CD6155">Nobody</b>');
                    }
                } else {
                    if (region == "Scotland") {
                        $($('.status')[3]).html("MSP Can't Make Nomination");
                    } else {
                        $($('.status')[3]).html("MP Can't Make Nomination");
                    }
                }

                //Vote

                rep = $(this).attr('rep');

                if (region == "Scotland") {
                    extra = " in 2016";
                } else {
                    extra = " in 2019";
                }

                if (vote == "Lab") {
                    $($('.status')[4]).html('Elected <b style="color:#DC241f">' + rep + '</b>' + extra);
                }
                if (vote == "Con") {
                    $($('.status')[4]).html('Elected <b style="color:#0087DC">' + rep + '</b>' + extra);
                }
                if (vote == "LD") {
                    $($('.status')[4]).html('Elected <b style="color:#FAA61A">' + rep + '</b>' + extra);
                }
                if (vote == "SNP") {
                    $($('.status')[4]).html('Elected <b style="background-color:black;color:#FDF38E;">' + rep + '</b>' + extra);
                }
                if (vote == "SPK") {
                    $($('.status')[4]).html('Elected <b style="color:lightgrey">' + rep + '</b>' + extra);
                }
                if (vote == "Green") {
                    $($('.status')[4]).html('Elected <b style="color:#6AB023">' + rep + '</b>' + extra);
                }
                if (vote == "PC") {
                    $($('.status')[4]).html('Elected <b style="color:#008142">' + rep + '</b>' + extra);
                }

                //Bar
                total = 0
                for (result in $(this).data('results')) {
                    amount = parseInt($(this).data('results')[result][1], 10);
                    total += amount;
                }

                $('.bar').html('');

                for (result in $(this).data('results')) {
                    amount = parseInt($(this).data('results')[result][1], 10);
                    name = $(this).data('results')[result][0];
                    if (amount > 0) {
                        colour = colours[name]

                        entry = $('<div></div>').css('width', amount / total * 100 + '%');
                        $(entry).css('height', '100%');
                        $(entry).css('background-color', colour);
                        $('.bar').append(entry);
                    }
                }

            });
        }
    });

    //Removes Values (Phone)
    $(svg, $('#info')).on('hover click mouseover touchstart', function(e) {
        if (!$(e.target).is('path')) {
            $('#title').text('Constituency Name')
            $($('.status')[0]).html("CLP Didn't Nominate in 2016")
            $($('.status')[1]).html("CLP Hasn't Nominated Leader Yet")
            $($('.status')[2]).html("CLP Hasn't Nominated Deputy Yet")
            $($('.status')[3]).html("MP/MSP Can't Make Nomination")
            $($('.status')[4]).html("Elected Party in Year")
            $("#info_hex", icon).css("fill", 'white');
            $('.bar').html('')
            $('.constituency', svg).css('fill-opacity', 1);
        }
    });
}

//Loads Spreadsheet
$(document).ready(function() {
    $('.deputy').css('visibility', 'hidden')
    $('.deputy').css('position', 'absolute')

    $('#map')[0].addEventListener('load', function() {
        svg = document.querySelector('#map').getSVGDocument();
        icon = document.querySelector('#hex').getSVGDocument();
        $('#SvgjsSvg1006', svg).css('filter', 'drop-shadow(-3px 5px 2px rgba(0, 0, 0, .2))');

        object = svgPanZoom('#map', {
            controlIconsEnabled: false,
            fit: 1,
            center: 1
        });

        Tabletop.init({
            key: 'https://docs.google.com/spreadsheets/d/1SKzDtlE7qcpZtueCl-CJlWkeUZnMctWrV7ufNnAlIJs/edit?usp=sharing',
            callback: function(data, tabletop) {
                render(data);
            },
            simpleSheet: true
        });
    });
});