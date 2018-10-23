class PagesController < ApplicationController
  def home
    refresh_gigs
    @coming_gigs = Gig.where(passed: 'false').sort_by { |gig| gig.date }

    require 'json'
    require 'open-uri'

    url = 'https://api.instagram.com/v1/users/self/media/recent/?access_token=1302285919.54149b3.67a325b2a4ee4145b5beefc519f1a915'
    response_serialized = open(url).read
    response = JSON.parse(response_serialized)
    @instagrams = []
    clean_response = response["data"]
    clean_response.each do |image|
      @instagrams << image["images"]["standard_resolution"]["url"]
    end
  end

end
