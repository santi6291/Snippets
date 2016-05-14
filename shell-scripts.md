# shell-scripts
compilation of shell scripts and aliases 

## newUser.sh

``` sh
if [ -n $1 ]; then 
	adduser --gecos "" $1;
	echo >> /etc/sudoers "$1    ALL=(ALL:ALL) ALL";
	sudo groupadd www-data;
	sudo adduser $1 www-data;
	sudo usermod -g www-data $1;
	sudo chown -R www-data:www-data /var/www/;
	sudo chmod -R g+w /var/www/;
	service ssh restart;
else
	echo "no username specified" 
	exit 1
fi
```

## OSX: ADD SPACER TO DOCK

```
defaults write com.apple.dock persistent-apps -array-add '{"tile-type"="spacer-tile";}';killall Dock
```

## ssh config host search
Change end pattern to match before next Host

```
checkConfig() {
	sed -n "/"$1"/,/^$/p" ~/.ssh/config;
}
```

## load local bash file

```
string="/Users/khaliq/Sites/Fireclay-Tile"
project=${string%% *}
cd $project && github . && open . -g && [ $(find . -maxdepth 2 -name .bashrc-local) ] && cd $(dirname $(find . -maxdepth 2 -name .bashrc-local)) && source .bashrc-local ; cd $project && git status
```

## DNS Resolver [dnsmasq](https://echo.co/blog/never-touch-your-local-etchosts-file-os-x-again)

```
brew install dnsmasq
mkdir -pv $(brew --prefix)/etc/
echo 'address=/.vmg/127.0.0.1'"\n"'address=/.local/127.0.0.1' > $(brew --prefix)/etc/dnsmasq.conf
sudo cp -v $(brew --prefix dnsmasq)/homebrew.mxcl.dnsmasq.plist /Library/LaunchDaemons
sudo launchctl load -w /Library/LaunchDaemons/homebrew.mxcl.dnsmasq.plist
sudo mkdir -v /etc/resolver
sudo bash -c 'echo "nameserver 127.0.0.1" > /etc/resolver/vmg'
sudo bash -c 'echo "nameserver 127.0.0.1" > /etc/resolver/local'
```
