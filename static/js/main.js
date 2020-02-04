function hasNumber(string) {
    return /\d/.test(string);
}

colours = {
    'Tom Watson': '#FFCCBC', //Pinish Red
    'Angela Eagle': '#C5CAE9', // Blueish Purple
    'Caroline Flint': '#F0F4C3', // Lime
    'Stella Creasy': '#B2EBF2', // Teal
    'Ben Bradshaw': '#F8BBD0', // Light Pink
    'Andy Burnham': '#2980B9', // Dark Blue
    'Yvette Cooper': '#E74C3C', // Medium Red
    'Liz Kendall': '#DC7633', // Dark Orange
    'Lisa Nandy': '#A569BD', // Purple
    'Keir Starmer': '#EB984E', // Orange
    'Rebecca Long-Bailey': '#45B39D', // Turquoise 
    'Emily Thornberry': '#5DADE2', // Blue/Aqua
    'Other': 'lightgrey', // Light Grey
    'None': '#CD6155', // Dark Red
    'Nobody': '#CD6155', // Dark Red
    'Owen Smith': '#CD55B9', // Dark Purple
    'Jeremy Corbyn': '#52BE80', // Dark Green
    'Angela Rayner': '#A9CCE3', // Light Blue
    'Dawn Butler': '#ABEBC6', // Light Green
    'Rosena Allin-Khan': '#D2B4DE', // Light Purple
    'Ian Murray': '#F9E79F', // Light Yellow
    'Richard Burgon': '#EDBB99', // Light Orange
    'Jess Phillips': '#F1C40F', // Dark Yellow
    //Parties
    'Lab': '#DC241f',
    'Con': '#0087DC',
    'LD': '#FAA61A',
    'SNP': '#FDF38E',
    'Spk': 'grey',
    'Green': '#6AB023',
    'PC': '#008142',
    'Brexit': '#12B6CF'
}

target = false;

function run(data, contestants, variable, reference) {
    target = false;
    $('.constituency', svg).css('fill-opacity', 1);
    $('.item').css('visibility', 'hidden')
    $('.item').css('position', 'absolute')
    $(reference).css('visibility', 'visible')
    $(reference).css('position', 'relative')

    count = contestants;

    for (item in data) {
        current = data[item][variable]
        if (current) {
            count[current] += 1
            $('path[title="' + data[item]['Constituency Name'] + '"]', svg).css('fill', colours[current])
        }
    }

    frequency(count, misc = reference)
}

function frequency(count, misc = '') {

    for (name in count) {
        key_item = document.querySelector(misc + '[name="' + name + '"]').getSVGDocument();
        $('#representing', key_item).css('fill', colours[name])
        $('#number', key_item).text(count[name]);
    }

    for (name in count) {
        $('td[name="' + name + '"]').prev().css('background-color', tinycolor(colours[name]).lighten(20).toString())
        $('td[name="' + name + '"]').html(count[name]);
    }
}

function render(data) {

    data_var = data;

    $('#leader').addClass('active')

    $('#leader').click(function(event) {
        $('.control').removeClass('active')
        $(this).addClass('active')
        $('.constituency', svg).css('fill', 'white');

        if (window.safari !== undefined) {
            setTimeout(
                function() {
                    run(
                        data, {
                            'Lisa Nandy': 0,
                            'Rebecca Long-Bailey': 0,
                            'Keir Starmer': 0,
                            'Emily Thornberry': 0,
                            'None': 0,
                        },
                        '2020 Leader Nomination',
                        '.leader'
                    )
                }, 300);
        } else {
            run(
                data, {
                    'Lisa Nandy': 0,
                    'Rebecca Long-Bailey': 0,
                    'Keir Starmer': 0,
                    'Emily Thornberry': 0,
                    'None': 0,
                },
                '2020 Leader Nomination',
                '.leader'
            )
        }
    });

    $('#deputy').click(function(event) {
        $('.control').removeClass('active')
        $(this).addClass('active')
        $('.constituency', svg).css('fill', 'white');

        if (window.safari !== undefined) {
            setTimeout(
                function() {
                    run(
                        data, {
                            'Angela Rayner': 0,
                            'Dawn Butler': 0,
                            'Rosena Allin-Khan': 0,
                            'Ian Murray': 0,
                            'Richard Burgon': 0,
                            'None': 0,
                        },
                        '2020 Deputy Nomination',
                        '.deputy'
                    )
                }, 300);
        } else {
            run(
                data, {
                    'Angela Rayner': 0,
                    'Dawn Butler': 0,
                    'Rosena Allin-Khan': 0,
                    'Ian Murray': 0,
                    'Richard Burgon': 0,
                    'None': 0,
                },
                '2020 Deputy Nomination',
                '.deputy'
            )
        }
    });

    $('#old').click(function(event) {
        $('.control').removeClass('active')
        $(this).addClass('active')
        $('.constituency', svg).css('fill', 'white');

        if (window.safari !== undefined) {
            setTimeout(
                function() {
                    run(
                        data, {
                            'Jeremy Corbyn': 0,
                            'Andy Burnham': 0,
                            'Yvette Cooper': 0,
                            'Liz Kendall': 0
                        },
                        '2015 Leader Nomination',
                        '.old'
                    )
                }, 300);
        } else {
            run(
                data, {
                    'Jeremy Corbyn': 0,
                    'Andy Burnham': 0,
                    'Yvette Cooper': 0,
                    'Liz Kendall': 0
                },
                '2015 Leader Nomination',
                '.old'
            )
        }
    });

    $('#medium').click(function(event) {
        $('.control').removeClass('active')
        $(this).addClass('active')
        $('.constituency', svg).css('fill', 'white');

        if (window.safari !== undefined) {
            setTimeout(
                function() {
                    run(
                        data, {
                            'Jeremy Corbyn': 0,
                            'Owen Smith': 0,
                            'Other': 0
                        },
                        '2016 Leader Nomination',
                        '.medium'
                    )
                }, 300);
        } else {
            run(
                data, {
                    'Jeremy Corbyn': 0,
                    'Owen Smith': 0,
                    'None': 0
                },
                '2016 Leader Nomination',
                '.medium'
            )
        }
    });

    $('#election_button').click(function(event) {
        $('.control').removeClass('active')
        $(this).addClass('active')
        $('.constituency', svg).css('fill', 'white');

        if (window.safari !== undefined) {
            setTimeout(
                function() {
                    run(
                        data, {
                            'Con': 0,
                            'Lab': 0,
                            'SNP': 0,
                            'LD': 0,
                            'PC': 0,
                            'Green': 0,
                            'Spk': 0
                        },
                        'Seat Elected Party (2016/2019)',
                        '.election'
                    )
                }, 300);
        } else {
            run(
                data, {
                    'Con': 0,
                    'Lab': 0,
                    'SNP': 0,
                    'LD': 0,
                    'PC': 0,
                    'Green': 0,
                    'Spk': 0
                },
                'Seat Elected Party (2016/2019)',
                '.election'
            )
        }
    });

    $('#mp').click(function(event) {
        $('.control').removeClass('active')
        $(this).addClass('active')
        $('.constituency', svg).css('fill', 'white');

        if (window.safari !== undefined) {
            setTimeout(
                function() {
                    run(
                        data, {
                            'Lisa Nandy': 0,
                            'Rebecca Long-Bailey': 0,
                            'Keir Starmer': 0,
                            'Emily Thornberry': 0,
                            'None': 0,
                        },
                        'MP Leader Nomination',
                        '.leader'
                    )
                }, 300);
        } else {
            run(
                data, {
                    'Lisa Nandy': 0,
                    'Rebecca Long-Bailey': 0,
                    'Keir Starmer': 0,
                    'Emily Thornberry': 0,
                    'None': 0,
                },
                'MP Leader Nomination',
                '.leader'
            )
        }
    });

    $('#defence').click(function(event) {
        $('.control').removeClass('active')
        $(this).addClass('active')

        target = true;
        $('.constituency', svg).css('fill-opacity', 0.05);
        for (item in data) {
            current = data[item]['Labour Target/Labour Defence?']
            if (current) {
                if (current == 'Labour Defence') {
                    $('path[title="' + data[item]['Constituency Name'] + '"]', svg).css('fill-opacity', 1)
                }
            }
        }
    });

    $('#target').click(function(event) {
        $('.control').removeClass('active')
        $(this).addClass('active')

        target = true;
        $('.constituency', svg).css('fill-opacity', 0.05);
        for (item in data) {
            current = data[item]['Labour Target/Labour Defence?']
            if (current) {
                if (current == 'Labour Target') {
                    $('path[title="' + data[item]['Constituency Name'] + '"]', svg).css('fill-opacity', 1)
                }
            }
        }
    });

    $(window).resize(function() {
        if (object) {
            object.resize();
            object.fit();
            if ($(window).width() <= 650) {
                object.center();
            } else {
                object.pan({ x: 200, y: 0 })
            }
        }
    });

    //Add in Meta Data
    for (item in data) {
        $('path[title="' + data[item]['Constituency Name'] + '"]', svg).attr('region', data[item]['Region'])
        $('path[title="' + data[item]['Constituency Name'] + '"]', svg).attr('result_new', data[item]['Seat Elected Party (2016/2019)'])
        $('path[title="' + data[item]['Constituency Name'] + '"]', svg).attr('extent_new', data[item]['Majority % (2016/2019)'])
        $('path[title="' + data[item]['Constituency Name'] + '"]', svg).attr('result_old', data[item]['Seat Elected Party (2011/2017)'])
        $('path[title="' + data[item]['Constituency Name'] + '"]', svg).attr('extent_old', data[item]['Majority % (2011/2017)'])
        $('path[title="' + data[item]['Constituency Name'] + '"]', svg).attr('name', data[item]['MP/MSP'])
        $('path[title="' + data[item]['Constituency Name'] + '"]', svg).attr('mp_leader', data[item]['MP Leader Nomination'])
        $('path[title="' + data[item]['Constituency Name'] + '"]', svg).attr('mp_deputy', data[item]['MP Deputy Nomination'])
        $('path[title="' + data[item]['Constituency Name'] + '"]', svg).attr('new_intake', data[item]['MP 2017+ Intake?'])
        $('path[title="' + data[item]['Constituency Name'] + '"]', svg).attr('clp_leader_2015', data[item]['2015 Leader Nomination'])
        $('path[title="' + data[item]['Constituency Name'] + '"]', svg).attr('clp_leader_2016', data[item]['2016 Leader Nomination'])
        $('path[title="' + data[item]['Constituency Name'] + '"]', svg).attr('clp_leader_2020', data[item]['2020 Leader Nomination'])
        $('path[title="' + data[item]['Constituency Name'] + '"]', svg).attr('clp_deputy_2015', data[item]['2015 Deputy Nomination'])
        $('path[title="' + data[item]['Constituency Name'] + '"]', svg).attr('clp_deputy_2020', data[item]['2020 Deputy Nomination'])

        results = [
            ['Lab', parseInt(data[item]['Lab'].replace(/,/g, ""), 10)],
            ['Con', parseInt(data[item]['Con'].replace(/,/g, ""), 10)],
            ['SNP', parseInt(data[item]['SNP'].replace(/,/g, ""), 10)],
            ['Brexit', parseInt(data[item]['Brexit'].replace(/,/g, ""), 10)],
            ['LD', parseInt(data[item]['LD'].replace(/,/g, ""), 10)],
            ['Green', parseInt(data[item]['Green'].replace(/,/g, ""), 10)],
            ['PC', parseInt(data[item]['PC'].replace(/,/g, ""), 10)],
            ['Spk', parseInt(data[item]['Spk'].replace(/,/g, ""), 10)],
            ['Other', parseInt(data[item]['Other'].replace(/,/g, ""), 10)],
        ].sort((a, b) => {
            return b[1] - a[1]
        })
        $('path[title="' + data[item]['Constituency Name'] + '"]', svg).data('election_results', results)
    }

    run(
        data, {
            'Lisa Nandy': 0,
            'Rebecca Long-Bailey': 0,
            'Keir Starmer': 0,
            'Emily Thornberry': 0,
            'None': 0,
        },
        '2020 Leader Nomination',
        '.leader'
    )

    $('#loading').remove();

    $('path', svg).each(function() {
        if ($(this).attr('id') && !hasNumber($(this).attr('id'))) {

            $(this).addClass('constituency');

            $(this).on('click mouseover touchstart', function() {

                if (!target) {
                    $('.constituency', svg).css('fill-opacity', 1);
                    $(this).css('fill-opacity', 0.6);
                }

                //Constituency Name
                $('#constituency_name').text($(this).attr('title'));
                $("#info_hex", icon).css("fill", tinycolor($(this).css('fill')).toHexString());

                //Result
                region = $(this).attr('region')
                old_result = $(this).attr('result_old')
                old_extent = $(this).attr('extent_old')
                old_colour = colours[old_result]

                if (old_extent <= 10) {
                    old_result = 'Marginal ' + old_result
                    old_colour = tinycolor(old_colour).brighten(20).toString();
                }
                if (old_extent >= 20) {
                    old_result = 'Safe ' + old_result
                    old_colour = tinycolor(old_colour).darken(5).toString();
                }

                if (region == "Scotland") {
                    old_year = '2011'
                } else {
                    old_year = '2017'
                }

                new_result = $(this).attr('result_new')
                new_extent = $(this).attr('extent_new')
                new_colour = colours[new_result]

                if (new_extent <= 10) {
                    new_result = 'Marginal ' + new_result
                    new_colour = tinycolor(new_colour).brighten(20).toString();
                }
                if (new_extent >= 20) {
                    new_result = 'Safe ' + new_result
                    new_colour = tinycolor(new_colour).darken(5).toString();
                }

                if (region == "Scotland") {
                    new_year = '2016'
                } else {
                    new_year = '2019'
                }

                $('#election').html('<b style="background-color:' + new_colour + ';">' + new_result + '</b> <b>(' + new_year + ')</b> and was <b style="background-color:' + old_colour + ';">' + old_result + '</b> <b>(' + old_year + ')</b>')

                //Election Bar
                total = 0
                election_results = $(this).data('election_results')
                for (result in election_results) {
                    amount = election_results[result][1];
                    total += amount;
                }

                $('#bar').html('');

                for (result in election_results) {
                    amount = election_results[result][1];
                    name = election_results[result][0];

                    if (amount > 0) {
                        colour = colours[name]
                        entry = $('<div></div>').css('width', amount / total * 100 + '%');
                        $(entry).css('height', '100%');
                        $(entry).css('background-color', colour);
                        $('#bar').append(entry);
                    }
                }

                //MP Nomination
                name = "<b>" + $(this).attr('name')

                if (region == 'Scotland') {
                    $('#elected').html(name + "MSP</b> is unable to Nominate<br><br>")
                } else {
                    if ($(this).attr('result_new') != "Lab") {
                        $('#elected').html(name + " MP</b> is unable to Nominate")
                    } else {
                        mp_leader = $(this).attr('mp_leader').replace('None', 'Nobody')
                        mp_deputy = $(this).attr('mp_deputy').replace('None', 'Nobody')
                        new_intake = $(this).attr('new_intake')
                        extra = ' '
                        if (new_intake) {
                            extra = " <b>(" + new_intake + " intake)</b>"
                        }
                        $('#elected').html(name + " MP</b>" + extra + " nominated <b style='background-color:" + colours[mp_leader] + "'>" + mp_leader + "</b> for Leader and <b style='background-color:" + colours[mp_deputy] + "'>" + mp_deputy + "</b> for Deputy")
                    }
                }

                //CLP Leader
                first = $(this).attr('clp_leader_2015')
                second = $(this).attr('clp_leader_2016')
                third = $(this).attr('clp_leader_2020')

                if (!third || third == "") {
                    third = "Hasn't Nominated Yet"
                } else {
                    third = "Nominated <b style='background-color:" + colours[third] + "'>" + third + "</b>"
                }

                if (!second || second == "") {
                    second = "Didn't Nominate"
                } else {
                    second = "Nominated <b style='background-color:" + colours[second] + "'>" + second + "</b>"
                }

                if (!first || first == "") {
                    first = "Didn't Nominate"
                } else {
                    first = "Nominated <b style='background-color:" + colours[first] + "'>" + first + "</b>"
                }

                $('#leader_info').html("For <b>Leader</b>, CLP " + third + " in 2020, " + second + " in 2016 and " + first + " in 2015")

                //CLP Deputy
                first = ''
                second = ''
                first = $(this).attr('clp_deputy_2015')
                second = $(this).attr('clp_deputy_2020')

                if (!second || second == "") {
                    second = "Didn't Nominate"
                } else {
                    second = "Nominated <b style='background-color:" + colours[second] + "'>" + second + "</b>"
                }

                if (!first || first == "") {
                    first = "Didn't Nominate"
                } else {
                    first = "Nominated <b style='background-color:" + colours[first] + "'>" + first + "</b>"
                }

                $('#deputy_info').html("For <b>Deputy</b>, CLP " + second + " in 2020 and " + first + " in 2015")
            });
        }
    });

    //Removes Values (Phone)
    $(svg, $('#info')).on('hover click mouseover touchstart', function(e) {
        if (!$(e.target).is('path')) {
            $('#constituency_name').text('Constituency Name')
            $('#election').html("<b>Party (Year)</b> and was <b>Party (Year)</b>")
            $('#bar').html('')
            $('#elected').html("<b>MP</b> nominated <b>Candidate</b> for Leader and <b>Candidate</b> for Deputy")
            $('#leader_info').html("For <b>Leader</b>, CLP Nominated <b>Candidate</b> in 2020, <b>Candidate</b> in 2016 and <b>Candidate</b> in 2015")
            $('#deputy_info').html("For <b>Deputy</b>, CLP Nominated <b>Candidate</b> in 2020 and <b>Candidate</b> in 2016")

            $("#info_hex", icon).css("fill", 'white');
            $('.bar').html('')
            if (!target) {
                $('.constituency', svg).css('fill-opacity', 1);
            }
        }
    });
}

//Loads Spreadsheet
$(document).ready(function() {
    $('.deputy, .old, .medium, .election').css('visibility', 'hidden')
    $('.deputy, .old, .medium, .election').css('position', 'absolute')

    $('#map')[0].addEventListener('load', function() {
        svg = document.querySelector('#map').getSVGDocument();
        icon = document.querySelector('#hex').getSVGDocument();

        $('#SvgjsSvg1006', svg).css('filter', 'drop-shadow(-3px 5px 2px rgba(0, 0, 0, .2))');

        object = svgPanZoom('#map', {
            controlIconsEnabled: false,
            fit: 1,
            center: 1
        });

        if ($(window).width() <= 650) {
            object.center();
        } else {
            object.pan({ x: 200, y: 0 })
        }

        Tabletop.init({
            key: 'https://docs.google.com/spreadsheets/d/1SKzDtlE7qcpZtueCl-CJlWkeUZnMctWrV7ufNnAlIJs/edit?usp=sharing',
            callback: function(data, tabletop) {
                render(data);
            },
            simpleSheet: true
        });
    });
});