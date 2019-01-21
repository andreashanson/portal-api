const defaultMediaPortal = {
  "theme":["mediaportal_backend", "jinja_mediaportal2"],
  "landing_page": "main.html",
  "bgcolor": "#161616",
  "fgcolor": "#E8E8E8",
  "bgcolor2": "#FFFFFF",
  "fgcolor2": "#161616",
  "fgcolor3": "#A8A7A6",
  "linkcolor": "#4D942E",
  "linkcolor2": "#1EB53A",
  "button_bgcolor": "#4D942E",
  "button_fgcolor": "#FFFFFF",
  "header_bgcolor":"#000000",
  "header_fgcolor":"#FFFFFF",
  "header_icons_fgcolor":"#FFFFFF",
  "header_icons_fgcolor2":"#FFFFFF",
  "footer_bgcolor":"#FFFFFF",
  "footer_fgcolor":"#161616",
  "login_bgcolor": "#FFFFFF",
  "login_fgcolor": "#161616",
  "register_bgcolor": "#FFFFFF",
  "register_bgcolor2": "#F5F5F5",
  "register_fgcolor": "#161616",
  "register_radio_button_border": "#A8A7A6",
  "register_radio_button_fill": "#A8A7A6",
  "tab_bgcolor": "#000000",
  "tab_fgcolor": "#FFFFFF",
  "tab_fgcolor2": "#A8A7A6",
  "browse_the_web_bgcolor": "#161616",
  "browse_the_web_fgcolor": "#FFFFFF",
  "buy_ticket_bgcolor": "#161616",
  "buy_ticket_fgcolor": "#FFFFFF",
  "menu_bgcolor": "#041722",
  "menu_fgcolor": "#FFFFFF",
  "menu_icons_fgcolor": "#FFFFFF",
  "menu_link_border_color": "#041722",
  "menu_media_links_bgcolor": "#000000",
  "menu_media_links_fgcolor": "#FFFFFF",
  "menu_media_links_border_color":"#062030",
  "media_item_title":"#E8E8E8",
  "media_item_length":"#A8A7A6",
  "media_item_offer_bgcolor":"#fcb74e",
  "media_item_offer_fgcolor":"#000000",
  "carousel_bgcolor": "#161616",
  "feedback_bgcolor": "#000000",
  "feedback_fgcolor": "#E8E8E8",
  "survey_bgcolor": "#161616",
  "survey_fgcolor": "#E8E8E8",
  "language_select_fgcolor": "#E8E8E8",
  "language_select_bgcolor": "#242424",
  "tag_bgcolor": "#4D942E",
  "tag_fgcolor": "#E8E8E8",
  "font_main": "Montserrat",
  "font_header": "Montserrat",
  "online_section_image": true,
  "login_section_image": true,
  "glow": "#4a9c1b",
  "connected_devices": false,
  "default_language": "en",
  "languages": {"en": "English"},
  "customer_name": "London Midland",
  "title": "Welcome to Motion",
  "map": true,
  "feedback": true,
  "survey": true,
  "disturbances": {
      "url": "http://internal.nationalrail.co.uk/xml/5.0/incidents.xml"
  },
  "connectivity": false,
  "media_portal": {
      "tag_page": "tags/",
      "structure": [
          {
              "title": "Watch",
              "path": "watch/",
              "type": "swipes",
              "color": "#93B93C",
              "ad_zone": {
                  "footer": "380194"
              },
              "content":[
                  {
                      "title": "Editor's Picks",
                      "path": "watch/editorspicks/",
                      "type": "grid",
                      "color": "#93B93C",
                      "ad_zone": {
                          "footer": "380194"
                      },
                      "content": {
                          "title": "{item.title}",
                          "path": "watch/editorspicks/{item.id}/",
                          "type": "drm_player",
                          "ad_zone": {
                              "footer": "380194"
                          },
                          "for_each_media": {
                              "type": "videos",
                              "category": ["Watch", "Editors Picks"]
                          }
                      }
                  },
                  {
                      "title": "Movies",
                      "path": "watch/movies/",
                      "type": "swipes",
                      "color": "#93B93C",
                      "ad_zone": {
                          "footer": "380194"
                      },
                      "content": [
                          {
                              "title": "All Movies",
                              "path": "watch/movies/allmovies/",
                              "type": "grid",
                              "color": "#93B93C",
                              "ad_zone": {
                                  "footer": "380194"
                              },
                              "content": {
                                  "title": "{item.title}",
                                  "path": "watch/movies/allmovies/{item.id}/",
                                  "type": "drm_player",
                                  "ad_zone": {
                                      "footer": "380194"
                                  },
                                  "for_each_media": {
                                      "type": "videos",
                                      "category": ["Watch", "Movies", "All Movies"]
                                  }
                              }
                          },
                          {
                              "title": "Cinema Trailers",
                              "path": "watch/movies/cinematrailers",
                              "type": "grid",
                              "color": "#93B93C",
                              "ad_zone": {
                                  "footer": "380194"
                              },
                              "content": {
                                  "title": "{item.title}",
                                  "path": "watch/movies/cinematrailers/{item.id}/",
                                  "type": "drm_player",
                                  "ad_zone": {
                                      "footer": "380194"
                                  },
                                  "for_each_media": {
                                      "type": "videos",
                                      "category": ["Watch", "Movies", "Cinema Trailers"]
                                  }
                              }
                          },
                          {
                              "title": "Bollywood",
                              "path": "watch/movies/bollywood/",
                              "type": "grid",
                              "color": "#93B93C",
                              "ad_zone": {
                                  "footer": "380194"
                              },
                              "content": {
                                  "title": "{item.title}",
                                  "path": "watch/movies/bollywood/{item.id}/",
                                  "type": "drm_player",
                                  "ad_zone": {
                                      "footer": "380194"
                                  },
                                  "for_each_media": {
                                      "type": "videos",
                                      "category": ["Watch", "Movies","Bollywood"]
                                  }
                              }
                          }
                      ]
                      },
                      {
                          "title": "TV",
                          "path": "watch/tv/",
                          "type": "grid",
                          "color": "#93B93C",
                          "ad_zone": {
                              "footer": "380194"
                          },
                          "content": {
                              "title": "{item.title}",
                              "path": "watch/tv/{item.id}/",
                              "type": "drm_player",
                              "ad_zone": {
                                  "footer": "380194"
                              },
                              "for_each_media": {
                                  "type": "videos",
                                  "category": ["Watch","TV"]
                              }
                          }
                      },
                      {
                          "title": "Kids TV",
                          "path": "watch/kidstv/",
                          "type": "grid",
                          "color": "#93B93C",
                          "ad_zone": {
                              "footer": "380194"
                          },
                          "content": {
                              "title": "{item.title}",
                              "path": "watch/kidstv/{item.id}/",
                              "type": "drm_player",
                              "ad_zone": {
                                  "footer": "380194"
                              },
                              "for_each_media": {
                                  "type": "videos",
                                  "category": ["Watch", "Kids TV"]
                              }
                          }
                      }

              ]
          },
          {
              "title": "Read",
              "path": "read/",
              "type": "swipes",
              "color": "#D02D7A",
              "ad_zone": {
                  "footer": "380194"
              },
              "content": [
                  {
                      "title": "Editor's Picks",
                      "path": "read/editorspicks/",
                      "type": "grid",
                      "color": "#D02D7A",
                      "content": {
                          "title": "{item.title}",
                          "path": "read/ebooks/{item.id}/",
                          "type": "book_page",
                          "ad_zone": {
                              "footer": "380194"
                          },
                          "for_each_media" : {
                              "type": "ebooks",
                              "category": ["Read","Editors Picks"]
                          }
                      }
                  },
                  {
                      "title": "Fiction",
                      "path": "read/fiction/",
                      "type": "grid",
                      "color": "#D02D7A",
                      "content": {
                          "title": "{item.title}",
                          "path": "read/fiction/{item.id}/",
                          "type": "book_page",
                          "ad_zone": {
                              "footer": "380194"
                          },
                          "for_each_media" : {
                              "type": "ebooks",
                              "category": ["Read","Fiction"]
                          }
                      }
                  },
                  {
                      "title": "Non-Fiction",
                      "path": "read/nonfiction/",
                      "type": "grid",
                      "color": "#D02D7A",
                      "content": {
                          "title": "{item.title}",
                          "path": "read/nonfiction/{item.id}/",
                          "type": "book_page",
                          "ad_zone": {
                              "footer": "380194"
                          },
                          "for_each_media" : {
                              "type": "ebooks",
                              "category": ["Read","Non-Fiction"]
                          }
                      }
                  },
                  {
                      "title": "Magazines",
                      "path": "read/magazines/",
                      "type": "grid",
                      "color": "#D02D7A",
                      "content": {
                          "title": "{item.title}",
                          "path": "read/magazines/{item.id}/",
                          "type": "book_page",
                          "ad_zone": {
                              "footer": "380194"
                          },
                          "for_each_media" : {
                              "type": "ebooks",
                              "category": ["Read","Magazines"]
                          }
                      }
                  }
              ]
          },
          {
              "title": "Listen",
              "path": "listen/",
              "type": "swipes",
              "color": "#D07734",
              "ad_zone": {
                  "footer": "380194"
              },
              "content": [
                  {
                      "title": "Editor's Picks",
                      "path": "listen/editorspicks/",
                      "type": "grid",
                      "color": "#D07734",
                      "content": {
                          "title": "{item.title}",
                          "path": "listen/editorspicks/{item.id}/",
                          "type": "audiobook_page",
                          "ad_zone": {
                              "footer": "380194"
                          },
                          "for_each_media" : {
                              "type": "audiobooks",
                              "category": ["Listen", "Editors Picks"]
                          }
                      }
                  },
                  {
                      "title": "Fiction",
                      "path": "listen/fiction/",
                      "type": "grid",
                      "color": "#D07734",
                      "content": {
                          "title": "{item.title}",
                          "path": "listen/fiction/{item.id}/",
                          "type": "audiobook_page",
                          "ad_zone": {
                              "footer": "380194"
                          },
                          "for_each_media" : {
                              "type": "audiobooks",
                              "category": ["Listen", "Fiction"]
                          }
                      }
                  },
                  {
                      "title": "Non-Fiction",
                      "path": "listen/nonfiction/",
                      "type": "grid",
                      "color": "#D07734",
                      "content": {
                          "title": "{item.title}",
                          "path": "listen/nonfiction/{item.id}/",
                          "type": "audiobook_page",
                          "ad_zone": {
                              "footer": "380194"
                          },
                          "for_each_media" : {
                              "type": "audiobooks",
                              "category": ["Listen", "Non-Fiction"]
                          }
                      }
                  }
              ]
          },
          {
              "title": "Play",
              "path": "play/",
              "type": "grid",
              "grid_style": "smaller",
              "color": "#37D2D2",
              "ad_zone": {
                  "footer": "380194"
              },
              "content": {
                  "title": "{item.title}",
                  "path": "play/{item.id}/",
                  "type": "game_page",
                  "ad_zone": {
                      "footer": "380194"
                  },
                  "for_each_media" : {
                      "type": "games",
                      "category": ["Play"]
                  }
              }
          }
      ]
  },
  "dropdown": false,
  "offers_email_default": true,
  "remember_email_default": true,
  "powered_by_logo": false,
  "register": {
      "form": [
          "email",
          "reason",
          "consent_text"
      ],
      "customer_id": 0,
      "hotspot_x_token": "8ZiFPAl9TWgGsjDQ36J2bZ9KUIQ2FfFxI8PTpioK"
  },
  "ad_zone": {
      "footer": "380194"
  },
  "transparent_sections": true,
  "center_texts": true,
  "google_analytics": "UA-86410057-1",
  "privacy_policy_link": "http://www.icomera.com/policies",
  "buy_ticket_link_target": "#",
  "contact_link_target": "#"
}


module.exports = defaultMediaPortal;
