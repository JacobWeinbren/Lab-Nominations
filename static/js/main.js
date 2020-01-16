function hasNumber(string) {
    return /\d/.test(string);
}

count = {
    'nandy': 0,
    'bailey': 0,
    'phillips': 0,
    'starmer': 0,
    'thornberry': 0,
    'none': 0,
}

function render() {

    //Loads Sheet
    Tabletop.init({
        key: 'https://docs.google.com/spreadsheets/d/1SKzDtlE7qcpZtueCl-CJlWkeUZnMctWrV7ufNnAlIJs/edit?usp=sharing',
        callback: function(data, tabletop) {
            //Add in Meta Data
            for (item in data) {
                $('path[title="' + data[item]['Constituency Name'] + '"]', svg).attr('old', data[item]['2016 Nomination'])
                $('path[title="' + data[item]['Constituency Name'] + '"]', svg).attr('current', data[item]['2020 Nomination'])
                $('path[title="' + data[item]['Constituency Name'] + '"]', svg).attr('vote', data[item]['Seat Elected Party (2016/2019)'])
                $('path[title="' + data[item]['Constituency Name'] + '"]', svg).attr('region', data[item]['Region'])
                $('path[title="' + data[item]['Constituency Name'] + '"]', svg).attr('mp', data[item]['MP Nomination'])

                results = [
                    ['nandy', data[item]['Nandy Vote'].trim().replace("", 0)],
                    ['bailey', data[item]['Long-Bailey Vote'].trim().replace("", 0)],
                    ['phillips', data[item]['Phillips Vote'].trim().replace("", 0)],
                    ['starmer', data[item]['Starmer Vote'].trim().replace("", 0)],
                    ['thornberry', data[item]['Thornberry Vote'].trim().replace("", 0)],
                    ['other', data[item]['Other Vote'].trim().replace("", 0)]
                ].sort((a, b) => {
                    return b[1] - a[1]
                })
                $('path[title="' + data[item]['Constituency Name'] + '"]').data('results', results)

                current = data[item]['2020 Nomination']
                if (current == 'Lisa Nandy') {
                    count['nandy'] += 1
                    $('path[title="' + data[item]['Constituency Name'] + '"]', svg).css('fill', '#A569BD')
                }
                if (current == 'Emily Thornberry') {
                    count['thornberry'] += 1
                    $('path[title="' + data[item]['Constituency Name'] + '"]', svg).css('fill', '#5DADE2')
                }
                if (current == 'Rebecca Long-Bailey') {
                    count['bailey'] += 1
                    $('path[title="' + data[item]['Constituency Name'] + '"]', svg).css('fill', '#45B39D')
                }
                if (current == 'Jess Phillips') {
                    count['phillips'] += 1
                    $('path[title="' + data[item]['Constituency Name'] + '"]', svg).css('fill', '#F4D03F')
                }
                if (current == 'Keir Starmer') {
                    count['starmer'] += 1
                    $('path[title="' + data[item]['Constituency Name'] + '"]', svg).css('fill', '#EB984E')
                }
                if (current == 'None') {
                    count['none'] += 1
                    $('path[title="' + data[item]['Constituency Name'] + '"]', svg).css('fill', '54C7C2')
                }
            }

            for (name in count) {
                document.querySelector('#' + name).getSVGDocument().getElementById("number").innerHTML = count[name]
            }

            $('#loading').remove();
        },
        simpleSheet: true
    })



    //Loads SVG
    $('#map')[0].addEventListener('load', function() {

        object = svgPanZoom('#map', {
            controlIconsEnabled: false,
            fit: 1,
            center: 1
        });

        svg = document.querySelector('#map').getSVGDocument()

        $('#SvgjsSvg1006', svg).css('filter', 'drop-shadow(-3px 5px 2px rgba(0, 0, 0, .2))')

        $('path', svg).each(function() {
            if ($(this).attr('id') && !hasNumber($(this).attr('id'))) {

                $(this).addClass('constituency')

                $(this).on('click mouseover touchstart', function() {
                    $('#title').text($(this).attr('title'))

                    $('path', document.querySelector('#map').getSVGDocument()).css('fill-opacity', 1)
                    $(this).css('fill-opacity', 0.6)

                    //2016 Nom
                    old = $(this).attr('old')
                    if (old && old.length > 0) {
                        if (old == "None") {
                            $($('.status')[0]).html('CLP Nominated <b style="color:#CD6155">Nobody</b> in 2016')
                        }
                        if (old == "Jeremy Corbyn") {
                            $($('.status')[0]).html('CLP Nominated <b style="color:#52BE80">Jeremy Corbyn</b> in 2016')
                        }
                        if (old == "Owen Smith") {
                            $($('.status')[0]).html('CLP Nominated  <b style="color:#CD55B9">Owen Smith</b> in 2016')
                        }
                    } else {
                        $($('.status')[0]).html("CLP Didn't Nominate in 2016")
                    }

                    current = $(this).attr('current')

                    if (current && current.length > 0) {
                        if (current == "None") {
                            $($('.status')[1]).html('CLP Nominated <b style="color:#CD6155">Nobody</b> in 2020')
                            document.querySelector('#hex').getSVGDocument().getElementById("info_hex").setAttribute("fill", "#CD6155")
                        }
                        if (current == "Lisa Nandy") {
                            $($('.status')[1]).html('CLP Nominated <b style="color:#A569BD">Lisa Nandy</b> in 2020')
                            document.querySelector('#hex').getSVGDocument().getElementById("info_hex").setAttribute("fill", "#A569BD")
                        }
                        if (current == "Emily Thornberry") {
                            $($('.status')[1]).html('CLP Nominated <b style="color:#5DADE2">Emily Thornberry</b> in 2020')
                            document.querySelector('#hex').getSVGDocument().getElementById("info_hex").setAttribute("fill", "#5DADE2")
                        }
                        if (current == "Rebecca Long-Bailey") {
                            $($('.status')[1]).html('CLP Nominated <b style="color:#45B39D">Rebecca Long-Bailey</b> in 2020')
                            document.querySelector('#hex').getSVGDocument().getElementById("info_hex").setAttribute("fill", "#45B39D")
                        }
                        if (current == "Jess Phillips") {
                            $($('.status')[1]).html('CLP Nominated <b style="color:#F4D03F">Jess Phillips</b> in 2020')
                            document.querySelector('#hex').getSVGDocument().getElementById("info_hex").setAttribute("fill", "#F4D03F")
                        }
                        if (current == "Keir Starmer") {
                            $($('.status')[1]).html('CLP Nominated <b style="color:#EB984E">Keir Starmer</b> in 2020')
                            document.querySelector('#hex').getSVGDocument().getElementById("info_hex").setAttribute("fill", "#EB984E")
                        }
                    } else {
                        $($('.status')[1]).html("CLP Hasn't Nominated Yet")
                        document.querySelector('#hex').getSVGDocument().getElementById("info_hex").setAttribute("fill", "white")
                    }

                    region = $(this).attr('region')
                    vote = $(this).attr('vote')

                    if (region == "Scotland") {
                        extra = " in 2016"
                    } else {
                        extra = " in 2019"
                    }

                    if (vote == "Lab") {
                        $($('.status')[2]).html('Elected <b style="color:#DC241f">Labour</b>' + extra)
                    }
                    if (vote == "Con") {
                        $($('.status')[2]).html('Elected <b style="color:#0087DC">Conservative</b>' + extra)
                    }
                    if (vote == "LD") {
                        $($('.status')[2]).html('Elected <b style="color:#FAA61A">Liberal Democrat</b>' + extra)
                    }
                    if (vote == "SNP") {
                        $($('.status')[2]).html('Elected <b style="background-color:black;color:#FDF38E;">Scottish National Party</b>' + extra)
                    }
                    if (vote == "SPK") {
                        $($('.status')[2]).html('Elected <b style="color:lightgrey">Speaker</b>' + extra)
                    }
                    if (vote == "Green") {
                        $($('.status')[2]).html('Elected <b style="color:#6AB023">Green</b>' + extra)
                    }
                    if (vote == "PC") {
                        $($('.status')[2]).html('Elected <b style="color:#008142">Plaid Cymru</b>' + extra)
                    }

                    mp = $(this).attr('mp')
                    if (vote == "Lab") {
                        if (mp && mp.length > 0) {
                            if (mp == "None") {
                                $($('.status')[3]).html('MP Nominated <b style="color:#CD6155">Nobody</b>')
                            }
                            if (mp == "Lisa Nandy") {
                                $($('.status')[3]).html('MP Nominated <b style="color:#A569BD">Lisa Nandy</b>')
                            }
                            if (mp == "Emily Thornberry") {
                                $($('.status')[3]).html('MP Nominated <b style="color:5DADE2">Emily Thornberry</b>')
                            }
                            if (mp == "Rebecca Long-Bailey") {
                                $($('.status')[3]).html('MP Nominated <b style="color:#45B39D">Rebecca Long-Bailey</b>')
                            }
                            if (mp == "Jess Phillips") {
                                $($('.status')[3]).html('MP Nominated <b style="color:#F4D03F">Jess Phillips</b>')
                            }
                            if (mp == "Keir Starmer") {
                                $($('.status')[3]).html('MP Nominated <b style="color:#EB984E">Keir Starmer</b>')
                            }
                            if (mp == "Clive Lewis") {
                                $($('.status')[3]).html('MP Nominated <b style="color:#54C7C2">Clive Lewis</b>')
                            }
                        } else {
                            $($('.status')[3]).html("MP Hasn't Nominated Yet")
                        }
                    } else {
                        $($('.status')[3]).html("MP Can't Make Nomination")
                    }

                    total = 0
                    for (result in $(this).data('results')) {
                        amount = parseInt($(this).data('results')[result][1], 10)
                        total += amount
                    }

                    $('.bar').html('')
                    for (result in $(this).data('results')) {
                        amount = parseInt($(this).data('results')[result][1], 10)
                        name = $(this).data('results')[result][0]
                        if (amount > 0) {

                            colour = ""
                            if (name == "nandy") {
                                colour = '#A569BD'
                            }
                            if (name == "thornberry") {
                                colour = "#5DADE2"
                            }
                            if (name == "bailey") {
                                colour = "#45B39D"
                            }
                            if (name == "phillips") {
                                colour = "#F4D03F"
                            }
                            if (name == "starmer") {
                                colour = "#EB984E"
                            }
                            if (name == "other") {
                                colour = "grey"
                            }

                            entry = $('<div></div>').css('width', amount / total * 100 + '%')
                            $(entry).css('height', '100%')
                            $(entry).css('background-color', colour)
                            $('.bar').append(entry)
                        }
                    }
                });
            }
        })

        //Removes Values (Phone)
        $(svg).on('click mouseover touchstart', function(e) {
            if (!$(e.target).is('path')) {
                $('#title').text('Constituency Name')
                $($('.status')[0]).html("CLP Didn't Nominate in 2016")
                $($('.status')[1]).html("CLP Hasn't Nominated Yet")
                $($('.status')[2]).html("Elected Party in Year")
                $($('.status')[3]).html("MP Can't Make Nomination")
                document.querySelector('#hex').getSVGDocument().getElementById("info_hex").setAttribute("fill", "white")
                $('.bar').html('')
                $('path', document.querySelector('#map').getSVGDocument()).css('fill-opacity', 1)
            }
        });
    });
}

//Loads Spreadsheet
$(document).ready(function() {
    render();
});

$(window).on('resize', function() {
    object.resize();
    object.fit();
    object.center();
});